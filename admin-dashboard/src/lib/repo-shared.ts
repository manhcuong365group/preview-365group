import thumbnailManifest from "./thumbnails-manifest.json";

export const LIVE_BASE_URL = "https://preview-365group.pages.dev";

const THUMBNAIL_SET = new Set<string>(thumbnailManifest as string[]);

export function hasThumbnail(slug: string): boolean {
  return THUMBNAIL_SET.has(slug);
}

export function isAllowedSlug(slug: string): boolean {
  return /^[a-zA-Z0-9._-]+$/.test(slug);
}

export interface LandingPageSummary {
  slug: string;
  title: string;
  path: string;
  liveUrl: string;
  thumbnailUrl: string | null;
  lastModified: string | null;
  lastCommitMessage: string | null;
}

export interface CommitEntry {
  hash: string;
  date: string;
  message: string;
  slug: string | null;
}

export interface DailyActivity {
  date: string; // YYYY-MM-DD
  label: string; // dd/MM
  count: number;
}

export function buildEmptyBuckets(days: number): Map<string, number> {
  const buckets = new Map<string, number>();
  const today = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    buckets.set(d.toISOString().slice(0, 10), 0);
  }
  return buckets;
}

export function bucketsToSeries(buckets: Map<string, number>): DailyActivity[] {
  return [...buckets.entries()].map(([date, count]) => ({
    date,
    label: `${date.slice(8, 10)}/${date.slice(5, 7)}`,
    count,
  }));
}

export interface PageContent {
  content: string;
  sha: string | null;
}
