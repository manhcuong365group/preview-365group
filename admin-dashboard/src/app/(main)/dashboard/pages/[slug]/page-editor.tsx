"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";

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

  return (
    <div className="@container/main flex h-[calc(100vh-8rem)] flex-col gap-4">
      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>{slug}</CardTitle>
            <p className="text-muted-foreground text-sm">auto365/{slug}/index.html</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/dashboard/pages">Quay lại</Link>
            </Button>
            {!hosted && (
              <Button variant="secondary" onClick={() => handleSave(false)} disabled={saving || !dirty}>
                Lưu
              </Button>
            )}
            <Button onClick={() => handleSave(true)} disabled={saving || !dirty}>
              {saving ? "Đang lưu..." : hosted ? "Commit lên GitHub" : "Lưu & commit"}
            </Button>
          </div>
        </CardHeader>
      </Card>

      <Card className="flex-1 overflow-hidden py-0">
        <CardContent className="h-full p-0">
          {loading ? (
            <div className="flex h-full items-center justify-center">
              <Spinner />
            </div>
          ) : error ? (
            <p className="p-4 text-destructive text-sm">{error}</p>
          ) : (
            <MonacoEditor
              height="100%"
              defaultLanguage="html"
              theme="vs-dark"
              value={draft}
              onChange={(value) => setDraft(value ?? "")}
              options={{ minimap: { enabled: false }, fontSize: 13, wordWrap: "on" }}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
