import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listLandingPages, type LandingPageSummary } from "@/lib/local-repo";

import { PagesExplorer } from "./pages-explorer";

export const dynamic = "force-dynamic";

export default async function Page() {
  let pages: LandingPageSummary[] = [];
  let error: string | null = null;

  try {
    pages = await listLandingPages();
  } catch (e) {
    error = (e as Error).message;
  }

  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Landing pages ({pages.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {error ? <p className="text-destructive text-sm">{error}</p> : <PagesExplorer pages={pages} />}
        </CardContent>
      </Card>
    </div>
  );
}
