"use client";

import Link from "next/link";
import { utilityBarLinks, announcementText } from "@/data/navigation";
import { AnnouncementBar } from "@/components/homepage/announcement-bar";
import { Navbar } from "@/components/navbar/navbar";
import { CategoryNav } from "@/components/navbar/category-nav";
import { Container } from "@/components/ui/container";

function UtilityBar() {
  return (
    <div className="hidden border-b border-border bg-muted/60 text-xs text-muted-foreground sm:block">
      <Container className="flex items-center justify-between gap-4 py-1.5">
        <p className="truncate font-medium">{announcementText}</p>
        <ul className="flex shrink-0 items-center gap-4">
          {utilityBarLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-medium text-foreground/70 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export function SiteHeader() {
  return (
    <>
      <AnnouncementBar />
      <UtilityBar />
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <Navbar />
        <CategoryNav />
      </div>
    </>
  );
}
