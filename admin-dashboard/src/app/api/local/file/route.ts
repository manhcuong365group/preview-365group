import { NextResponse } from "next/server";

import { commitPage, getPageContent, isHostedMode, savePageContent } from "@/lib/local-repo";

export async function GET(request: Request) {
  const slug = new URL(request.url).searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "Thiếu slug." }, { status: 400 });
  try {
    const { content, sha } = await getPageContent(slug);
    return NextResponse.json({ content, sha, hosted: isHostedMode() });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const body = (await request.json()) as { slug?: string; content?: string; sha?: string | null; commit?: boolean };
  const { slug, content, sha, commit } = body;
  if (!slug || typeof content !== "string") {
    return NextResponse.json({ error: "Thiếu slug hoặc content." }, { status: 400 });
  }
  try {
    const result = await savePageContent(slug, content, sha ?? null);
    if (commit && !result.committed) {
      const commitResult = await commitPage(slug, `Update ${slug}/index.html via admin dashboard`);
      return NextResponse.json({ saved: true, ...commitResult });
    }
    return NextResponse.json({ saved: true, committed: result.committed });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
