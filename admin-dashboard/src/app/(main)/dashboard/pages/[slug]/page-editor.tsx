"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ExternalLink, Eye, RotateCcw, Save } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { LIVE_BASE_URL } from "@/lib/repo-shared";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export function PageEditor({ slug }: { slug: string }) {
  const [original, setOriginal] = useState<string | null>(null);
  const [draft, setDraft] = useState<string>("");
  const [sha, setSha] = useState<string | null>(null);
  const [hosted, setHosted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch(`/api/local/file?slug=${encodeURIComponent(slug)}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (data.error) {
          setError(data.error);
        } else {
          setOriginal(data.content);
          setDraft(data.content);
          setSha(data.sha ?? null);
          setHosted(Boolean(data.hosted));
        }
      })
      .catch((e) => !cancelled && setError(String(e)))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [slug]);

  async function handleSave(commit: boolean) {
    setSaving(true);
    try {
      const res = await fetch("/api/local/file", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, content: draft, sha, commit }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setOriginal(draft);
      if (hosted) {
        // hosted mode luôn commit thẳng lên GitHub, sha cũ không còn hợp lệ nữa
        toast.success("Đã commit thẳng lên GitHub. Cloudflare Pages sẽ tự deploy sau ít phút.");
        fetch(`/api/local/file?slug=${encodeURIComponent(slug)}`)
          .then((r) => r.json())
          .then((d) => !d.error && setSha(d.sha ?? null));
      } else {
        toast.success(
          commit
            ? data.committed
              ? "Đã lưu file và tạo commit local. Nhớ git push khi sẵn sàng."
              : "Đã lưu file (không có gì để commit)."
            : "Đã lưu file vào ổ đĩa.",
        );
      }
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setSaving(false);
    }
  }

  const dirty = original !== null && draft !== original;
  const liveUrl = `${LIVE_BASE_URL}/${encodeURIComponent(slug)}/`;
  const previewDocument = useMemo(() => {
    if (!draft || /<base\s/i.test(draft)) return draft;
    return draft.replace(/<head(\s[^>]*)?>/i, `$&<base href="${liveUrl}">`);
  }, [draft, liveUrl]);

  return (
    <div className="@container/main flex h-[calc(100vh-8rem)] min-h-[640px] flex-col gap-4">
      <Card className="shrink-0">
        <CardHeader className="gap-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          <div>
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">Chỉnh sửa bài</CardTitle>
              <span className={`rounded-full px-2 py-0.5 text-xs ${dirty ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`}>
                {dirty ? "Chưa lưu" : "Đã lưu"}
              </span>
            </div>
            <p className="text-muted-foreground mt-1 text-sm">auto365/{slug}/index.html</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/pages">Quay lại</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink />
                Mở trang thật
              </a>
            </Button>
            {dirty && (
              <Button variant="ghost" size="sm" onClick={() => setDraft(original ?? "")} disabled={saving}>
                <RotateCcw />
                Hoàn tác
              </Button>
            )}
            {!hosted && (
              <Button variant="secondary" size="sm" onClick={() => handleSave(false)} disabled={saving || !dirty}>
                Lưu
              </Button>
            )}
            <Button size="sm" onClick={() => handleSave(true)} disabled={saving || !dirty}>
              <Save />
              {saving ? "Đang lưu..." : hosted ? "Lưu bài" : "Lưu & commit"}
            </Button>
          </div>
        </CardHeader>
      </Card>

      <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-2">
        <Card className="min-h-0 overflow-hidden py-0">
          <CardHeader className="border-b px-4 py-3">
            <CardTitle className="flex items-center gap-2 text-sm"><Save /> Nội dung HTML</CardTitle>
          </CardHeader>
          <CardContent className="h-[calc(100%-57px)] p-0">
            {loading ? <div className="flex h-full items-center justify-center"><Spinner /></div> : error ? <p className="text-destructive p-4 text-sm">{error}</p> : <MonacoEditor height="100%" defaultLanguage="html" theme="vs-dark" value={draft} onChange={(value) => setDraft(value ?? "")} options={{ minimap: { enabled: false }, fontSize: 13, wordWrap: "on" }} />}
          </CardContent>
        </Card>

        <Card className="min-h-0 overflow-hidden py-0">
          <CardHeader className="border-b px-4 py-3">
            <CardTitle className="flex items-center gap-2 text-sm"><Eye /> Xem trước trực tiếp</CardTitle>
          </CardHeader>
          <CardContent className="h-[calc(100%-57px)] bg-muted/30 p-3">
            {loading ? <div className="flex h-full items-center justify-center"><Spinner /></div> : error ? <p className="text-destructive p-4 text-sm">Không thể xem trước bài viết.</p> : <iframe title={`Xem trước ${slug}`} srcDoc={previewDocument} sandbox="allow-forms allow-modals allow-popups allow-scripts" className="h-full w-full rounded-md border bg-white" />}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
