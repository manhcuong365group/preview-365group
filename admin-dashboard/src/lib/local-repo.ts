import "server-only";

import { Octokit } from "octokit";

import { extractTitle } from "./html-utils";
import {
  bucketsToSeries,
  buildEmptyBuckets,
  hasThumbnail,
  isAllowedSlug,
  LIVE_BASE_URL,
  type CommitEntry,
  type DailyActivity,
  type LandingPageSummary,
  type PageContent,
} from "./repo-shared";

export type { CommitEntry, DailyActivity, LandingPageSummary, PageContent };

const OWNER = process.env.GITHUB_OWNER ?? "manhcuong365group";
const REPO = process.env.GITHUB_REPO ?? "preview-365group";
const BRANCH = process.env.GITHUB_BRANCH ?? "main";

/**
 * Chạy local (npm run dev trên máy có sẵn ổ đĩa + git) → đọc/ghi thẳng filesystem, không cần token.
 * Chạy hosted (deploy lên Cloudflare Pages, không có ổ đĩa) → bắt buộc đọc/ghi qua GitHub API.
 * Module đọc filesystem/git chỉ được import động (`import()`) trong nhánh local bên dưới —
 * node:child_process không tồn tại trên Cloudflare Workers/Pages nên không được import tĩnh ở đây.
 */
export function isHostedMode(): boolean {
  return Boolean(process.env.GITHUB_TOKEN);
}

let _octokit: Octokit | null = null;
function octokit() {
  if (!_octokit) {
    const auth = process.env.GITHUB_TOKEN;
    if (!auth) throw new Error("Thiếu GITHUB_TOKEN.");
    _octokit = new Octokit({ auth });
  }
  return _octokit;
}

async function listLandingPagesGitHub(): Promise<LandingPageSummary[]> {
  try {
    const client = octokit();
    const { data } = await client.rest.repos.getContent({ owner: OWNER, repo: REPO, path: "auto365", ref: BRANCH });
    if (!Array.isArray(data)) return [];
    const dirs = data.filter((entry) => entry.type === "dir");

    // ponytail: chỉ đọc index.html (1 request/page); lịch sử commit đã có ở dashboard activity.
    const pages = await Promise.all(
      dirs.map(async (dir): Promise<LandingPageSummary | null> => {
        const indexPath = `${dir.path}/index.html`;
        try {
          const fileRes = await client.rest.repos.getContent({ owner: OWNER, repo: REPO, path: indexPath, ref: BRANCH });
          const fileData = fileRes.data;
          if (Array.isArray(fileData) || fileData.type !== "file" || !fileData.content) return null;
          const html = Buffer.from(fileData.content, "base64").toString("utf-8");
          return {
            slug: dir.name,
            title: extractTitle(html) ?? dir.name,
            path: indexPath,
            liveUrl: `${LIVE_BASE_URL}/${dir.name}/`,
            thumbnailUrl: hasThumbnail(dir.name) ? `/thumbnails/${dir.name}.jpg` : null,
            lastModified: null,
            lastCommitMessage: null,
          };
        } catch {
          return null;
        }
      }),
    );

    return pages.filter((p): p is LandingPageSummary => p !== null);
  } catch {
    return [];
  }
}

export async function listLandingPages(): Promise<LandingPageSummary[]> {
  const pages = isHostedMode()
    ? await listLandingPagesGitHub()
    : await (await import("./local-fs")).listLandingPagesLocal();
  return pages.sort((a, b) => (b.lastModified ?? "").localeCompare(a.lastModified ?? ""));
}

async function getRecentActivityGitHub(limit: number): Promise<CommitEntry[]> {
  try {
    const client = octokit();
    const { data } = await client.rest.repos.listCommits({
      owner: OWNER,
      repo: REPO,
      path: "auto365",
      sha: BRANCH,
      per_page: limit,
    });
    const commits = await Promise.all(
      data.map(async (c): Promise<CommitEntry> => {
        let slug: string | null = null;
        try {
          const detail = await client.rest.repos.getCommit({ owner: OWNER, repo: REPO, ref: c.sha });
          const firstFile = detail.data.files?.find(
            (f) => f.filename.startsWith("auto365/") && f.filename.split("/").length > 2,
          );
          slug = firstFile ? firstFile.filename.split("/")[1] : null;
        } catch {
          // bỏ qua, để slug null
        }
        return {
          hash: c.sha.slice(0, 7),
          date: c.commit.committer?.date ?? "",
          message: c.commit.message.split("\n")[0],
          slug,
        };
      }),
    );
    return commits;
  } catch {
    return [];
  }
}

export async function getRecentActivity(limit = 8): Promise<CommitEntry[]> {
  return isHostedMode() ? getRecentActivityGitHub(limit) : (await import("./local-fs")).getRecentActivityLocal(limit);
}

async function getCommitActivitySeriesGitHub(days: number): Promise<DailyActivity[]> {
  const buckets = buildEmptyBuckets(days);
  try {
    const client = octokit();
    const since = new Date(Date.now() - days * 86_400_000).toISOString();
    const commits = await client.paginate(client.rest.repos.listCommits, {
      owner: OWNER,
      repo: REPO,
      path: "auto365",
      sha: BRANCH,
      since,
      per_page: 100,
    });
    for (const c of commits) {
      const iso = c.commit.committer?.date;
      if (!iso) continue;
      const key = iso.slice(0, 10);
      if (buckets.has(key)) buckets.set(key, (buckets.get(key) ?? 0) + 1);
    }
  } catch {
    // giữ nguyên buckets = 0 nếu API lỗi
  }
  return bucketsToSeries(buckets);
}

export async function getCommitActivitySeries(days = 14): Promise<DailyActivity[]> {
  if (isHostedMode()) return getCommitActivitySeriesGitHub(days);
  const buckets = buildEmptyBuckets(days);
  await (await import("./local-fs")).getCommitActivitySeriesLocal(buckets, days);
  return bucketsToSeries(buckets);
}

export async function getPageContent(slug: string): Promise<PageContent> {
  if (!isAllowedSlug(slug)) throw new Error("Slug không hợp lệ.");

  if (isHostedMode()) {
    const client = octokit();
    const relPath = `auto365/${slug}/index.html`;
    const { data } = await client.rest.repos.getContent({ owner: OWNER, repo: REPO, path: relPath, ref: BRANCH });
    if (Array.isArray(data) || data.type !== "file" || !data.content) {
      throw new Error(`Không đọc được file: ${relPath}`);
    }
    return { content: Buffer.from(data.content, "base64").toString("utf-8"), sha: data.sha };
  }

  const content = await (await import("./local-fs")).getPageContentLocal(slug);
  return { content, sha: null };
}

/** Ghi nội dung mới. Ở hosted mode, thao tác này LUÔN tạo 1 commit trên GitHub (không có khái niệm "lưu nháp"). */
export async function savePageContent(
  slug: string,
  content: string,
  sha: string | null,
): Promise<{ committed: boolean }> {
  if (!isAllowedSlug(slug)) throw new Error("Slug không hợp lệ.");

  if (isHostedMode()) {
    if (!sha) throw new Error("Thiếu sha của file gốc, không thể lưu.");
    const client = octokit();
    const relPath = `auto365/${slug}/index.html`;
    await client.rest.repos.createOrUpdateFileContents({
      owner: OWNER,
      repo: REPO,
      path: relPath,
      message: `Update ${relPath} via admin dashboard`,
      content: Buffer.from(content, "utf-8").toString("base64"),
      sha,
      branch: BRANCH,
    });
    return { committed: true };
  }

  await (await import("./local-fs")).savePageContentLocal(slug, content);
  return { committed: false };
}

export async function commitPage(slug: string, message: string): Promise<{ committed: boolean; output: string }> {
  if (!isAllowedSlug(slug)) throw new Error("Slug không hợp lệ.");
  if (isHostedMode()) {
    // Ở hosted mode, savePageContent() đã commit thẳng lên GitHub rồi.
    return { committed: true, output: "" };
  }
  return (await import("./local-fs")).commitPageLocal(slug, message);
}
