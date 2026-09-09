"use client";

import { ExternalLink, FileCode2, Pencil, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import type { LandingPageSummary } from "@/lib/local-repo";

function formatTime(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("vi-VN", { dateStyle: "short", timeStyle: "short" });
}

function bucketLabel(iso: string | null): string {
  if (!iso) return "Không rõ";
  const date = new Date(iso);
  const now = new Date();
  const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const diffDays = Math.round((startOfDay(now) - startOfDay(date)) / 86_400_000);

  if (diffDays === 0) return "Hôm nay";
  if (diffDays === 1) return "Hôm qua";
  if (diffDays < 7) return "7 ngày qua";
  if (diffDays < 30) return "30 ngày qua";
  return date.toLocaleDateString("vi-VN", { month: "long", year: "numeric" });
}

function groupByBucket(pages: LandingPageSummary[]) {
  const order = ["Hôm nay", "Hôm qua", "7 ngày qua", "30 ngày qua"];
  const groups = new Map<string, LandingPageSummary[]>();
  for (const page of pages) {
    const key = bucketLabel(page.lastModified);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)?.push(page);
  }
  return [...groups.entries()].sort((a, b) => {
    const ai = order.indexOf(a[0]);
    const bi = order.indexOf(b[0]);
    if (ai === -1 && bi === -1) return b[0].localeCompare(a[0]);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
}

function PageRow({ page }: { page: LandingPageSummary }) {
  return (
    <div className="group flex items-center gap-3 px-3 py-2.5 transition-colors hover:bg-accent/50">
      <div className="relative h-11 w-16 shrink-0 overflow-hidden rounded-md border bg-muted">
        {page.thumbnailUrl ? (
          <Image src={page.thumbnailUrl} alt={page.title} fill sizes="64px" className="object-cover object-top" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <FileCode2 className="size-4 text-muted-foreground/40" />
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-sm">{page.title}</p>
        <p className="truncate text-muted-foreground text-xs">
          {page.slug} · {formatTime(page.lastModified)}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <Link
          href={page.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex size-8 items-center justify-center rounded-md hover:bg-accent"
          aria-label="Xem trang trực tiếp"
        >
          <ExternalLink className="size-4" />
        </Link>
        <Link
          href={`/dashboard/pages/${page.slug}`}
          className="inline-flex size-8 items-center justify-center rounded-md hover:bg-accent"
          aria-label="Sửa trang"
        >
          <Pencil className="size-4" />
        </Link>
      </div>
    </div>
  );
}

export function PagesExplorer({ pages }: { pages: LandingPageSummary[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return pages;
    return pages.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q) ||
        (p.lastCommitMessage ?? "").toLowerCase().includes(q),
    );
  }, [pages, query]);

  const groups = useMemo(() => groupByBucket(filtered), [filtered]);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative max-w-sm">
        <Search className="-translate-y-1/2 absolute top-1/2 left-2.5 size-4 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm theo tên trang, slug, commit..."
          className="pl-8"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="py-8 text-center text-muted-foreground text-sm">Không tìm thấy trang nào phù hợp.</p>
      ) : (
        <div className="flex flex-col gap-5">
          {groups.map(([label, group]) => (
            <div key={label} className="flex flex-col gap-1.5">
              <h3 className="font-medium text-muted-foreground text-xs uppercase tracking-wide">
                {label} · {group.length}
              </h3>
              <div className="flex flex-col divide-y rounded-lg border">
                {group.map((p) => (
                  <PageRow key={p.slug} page={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
