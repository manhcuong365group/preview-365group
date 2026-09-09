import "server-only";

// Chỉ import module này khi CHẮC CHẮN đang chạy local (có ổ đĩa + git) — KHÔNG import
// tĩnh (static import) từ local-repo.ts, vì node:child_process không tồn tại trên Cloudflare
// Workers/Pages runtime và sẽ làm vỡ build khi deploy hosted.
import { exec as execCb } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";
import { promisify } from "node:util";

import { extractTitle } from "./html-utils";
import { hasThumbnail, LIVE_BASE_URL, type CommitEntry, type DailyActivity, type LandingPageSummary } from "./repo-shared";

const exec = promisify(execCb);

const REPO_ROOT = path.resolve(process.cwd(), "..");
const AUTO365_DIR = path.join(REPO_ROOT, "auto365");

async function gitLog(relPath: string) {
  try {
    const { stdout } = await exec(`git log -1 --format=%cI%x1f%s -- "${relPath}"`, { cwd: REPO_ROOT });
    const [date, message] = stdout.trim().split("\x1f");
    return { date: date || null, message: message || null };
  } catch {
    return { date: null, message: null };
  }
}

export async function listLandingPagesLocal(): Promise<LandingPageSummary[]> {
  const entries = await fs.readdir(AUTO365_DIR, { withFileTypes: true });
  const dirs = entries.filter((e) => e.isDirectory());

  const pages = await Promise.all(
    dirs.map(async (dir): Promise<LandingPageSummary | null> => {
      const indexPath = path.join(AUTO365_DIR, dir.name, "index.html");
      let html: string;
      try {
        html = await fs.readFile(indexPath, "utf-8");
      } catch {
        return null;
      }
      const relPath = path.join("auto365", dir.name, "index.html").replace(/\\/g, "/");
      const { date, message } = await gitLog(relPath);
      return {
        slug: dir.name,
        title: extractTitle(html) ?? dir.name,
        path: relPath,
        liveUrl: `${LIVE_BASE_URL}/${dir.name}/`,
        thumbnailUrl: hasThumbnail(dir.name) ? `/thumbnails/${dir.name}.jpg` : null,
        lastModified: date,
        lastCommitMessage: message,
      };
    }),
  );

  return pages.filter((p): p is LandingPageSummary => p !== null);
}

export async function getRecentActivityLocal(limit: number): Promise<CommitEntry[]> {
  try {
    const { stdout } = await exec(`git log -${limit * 3} --format=%h%x1f%cI%x1f%s --name-only -- auto365`, {
      cwd: REPO_ROOT,
      maxBuffer: 1024 * 1024,
    });
    const commits: CommitEntry[] = [];
    const blocks = stdout.trim().split(/\n(?=[0-9a-f]{7,}\x1f)/);
    for (const block of blocks) {
      const [header, ...fileLines] = block.split("\n");
      const [hash, date, message] = header.split("\x1f");
      if (!hash) continue;
      const firstFile = fileLines.find((f) => f.startsWith("auto365/") && f.split("/").length > 2);
      const slug = firstFile ? firstFile.split("/")[1] : null;
      commits.push({ hash, date, message, slug: slug ?? null });
      if (commits.length >= limit) break;
    }
    return commits;
  } catch {
    return [];
  }
}

export async function getCommitActivitySeriesLocal(buckets: Map<string, number>, days: number): Promise<void> {
  try {
    const { stdout } = await exec(`git log --since="${days} days ago" --format=%cI -- auto365`, {
      cwd: REPO_ROOT,
      maxBuffer: 1024 * 1024,
    });
    for (const line of stdout.trim().split("\n").filter(Boolean)) {
      const key = line.slice(0, 10);
      if (buckets.has(key)) buckets.set(key, (buckets.get(key) ?? 0) + 1);
    }
  } catch {
    // giữ nguyên buckets = 0 nếu git lỗi
  }
}

export async function getPageContentLocal(slug: string): Promise<string> {
  const filePath = path.join(AUTO365_DIR, slug, "index.html");
  return fs.readFile(filePath, "utf-8");
}

export async function savePageContentLocal(slug: string, content: string): Promise<void> {
  const filePath = path.join(AUTO365_DIR, slug, "index.html");
  await fs.access(filePath); // chỉ cho ghi đè file đã tồn tại, không tạo file mới lung tung
  await fs.writeFile(filePath, content, "utf-8");
}

export async function commitPageLocal(slug: string, message: string): Promise<{ committed: boolean; output: string }> {
  const relPath = path.join("auto365", slug, "index.html").replace(/\\/g, "/");
  await exec(`git add "${relPath}"`, { cwd: REPO_ROOT });
  try {
    const { stdout } = await exec(`git commit -m "${message.replace(/"/g, '\\"')}"`, { cwd: REPO_ROOT });
    return { committed: true, output: stdout };
  } catch (error) {
    const err = error as { stdout?: string; message: string };
    if (err.stdout?.includes("nothing to commit")) {
      return { committed: false, output: "Không có thay đổi để commit." };
    }
    throw new Error(err.message);
  }
}
