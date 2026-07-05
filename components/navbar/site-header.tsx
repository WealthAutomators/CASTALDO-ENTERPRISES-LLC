"use client";

import { Navbar } from "@/components/navbar/navbar";
import { UtilityBar } from "@/components/navbar/utility-bar";
import { CategoryNav } from "@/components/navbar/category-nav";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <UtilityBar />
      <Navbar />
      <CategoryNav />
    </div>
  );
}
