"use client";

import Link from "next/link";

import { siGithub } from "simple-icons";

import { SimpleIcon } from "@/components/simple-icon";
import { Button } from "@/components/ui/button";

export function GitHubRepositoriesMenu() {
  return (
    <Button size="icon" asChild aria-label="Mở repo preview-365group trên GitHub">
      <Link prefetch={false} href="https://github.com/manhcuong365group/preview-365group" target="_blank" rel="noreferrer">
        <SimpleIcon icon={siGithub} className="fill-primary-foreground" />
      </Link>
    </Button>
  );
}
