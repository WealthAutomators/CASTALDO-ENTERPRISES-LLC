"use client";

import { AnnouncementBar } from "@/components/homepage/announcement-bar";
import { Navbar } from "@/components/navbar/navbar";
import { CategoryNav } from "@/components/navbar/category-nav";

export function SiteHeader() {
  return (
    <>
      <AnnouncementBar />
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <Navbar />
        <CategoryNav />
      </div>
    </>
  );
}
