import { Clock, FileCode2, GitCommitHorizontal, TrendingUp } from "lucide-react";
import Link from "next/link";

import { ActivityChart } from "./activity-chart";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getCommitActivitySeries, getRecentActivity, listLandingPages } from "@/lib/local-repo";

function formatDate(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("vi-VN", { dateStyle: "medium", timeStyle: "short" });
}

function formatRelative(iso: string | null) {
  if (!iso) return "—";
  const diffMs = Date.now() - new Date(iso).getTime();
  const hours = Math.floor(diffMs / 3_600_000);
  if (hours < 1) return "vừa xong";
  if (hours < 24) return `${hours} giờ trước`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} ngày trước`;
  return formatDate(iso);
}

export default async function Page() {
  const [pages, activity, series] = await Promise.all([
    listLandingPages(),
    getRecentActivity(10),
    getCommitActivitySeries(14),
  ]);

  const weekAgo = Date.now() - 7 * 24 * 3_600_000;
  const updatedThisWeek = pages.filter((p) => p.lastModified && new Date(p.lastModified).getTime() > weekAgo).length;
  const mostRecent = pages[0];

  const stats = [
    {
      label: "Landing pages",
      value: pages.length,
      description: "Tổng số trang trong auto365/",
      icon: FileCode2,
    },
    {
      label: "Sửa trong 7 ngày qua",
      value: updatedThisWeek,
      description: "Trang có commit gần đây",
      icon: TrendingUp,
    },
    {
      label: "Mới nhất",
      value: mostRecent?.title ?? "—",
      description: mostRecent ? formatRelative(mostRecent.lastModified) : "Chưa có dữ liệu",
      icon: Clock,
      isText: true,
    },
  ];

  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6">
      <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardDescription>{stat.label}</CardDescription>
              <stat.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className={stat.isText ? "truncate font-semibold text-lg" : "font-semibold text-3xl tabular-nums"}>
                {stat.value}
              </div>
              <p className="mt-1 text-muted-foreground text-xs">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Commit theo ngày</CardTitle>
          <CardDescription>14 ngày gần nhất, chạm vào auto365/</CardDescription>
        </CardHeader>
        <CardContent>
          <ActivityChart data={series} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hoạt động gần đây</CardTitle>
          <CardDescription>10 commit gần nhất chạm vào auto365/</CardDescription>
        </CardHeader>
        <CardContent>
          {activity.length === 0 ? (
            <p className="text-muted-foreground text-sm">Chưa có lịch sử commit.</p>
          ) : (
            <ul className="flex flex-col divide-y">
              {activity.map((entry) => (
                <li key={entry.hash} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
                  <div className="flex min-w-0 items-center gap-3">
                    <GitCommitHorizontal className="size-4 shrink-0 text-muted-foreground" />
                    <div className="min-w-0">
                      <p className="truncate text-sm">{entry.message}</p>
                      <p className="text-muted-foreground text-xs">
                        {formatRelative(entry.date)} · <code className="font-mono">{entry.hash}</code>
                      </p>
                    </div>
                  </div>
                  {entry.slug && (
                    <Link href={`/dashboard/pages/${entry.slug}`} className="shrink-0">
                      <Badge variant="outline" className="hover:bg-accent">
                        {entry.slug}
                      </Badge>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
