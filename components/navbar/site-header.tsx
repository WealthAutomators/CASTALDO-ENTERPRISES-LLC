"use client";

import { Navbar } from "@/components/navbar/navbar";
import { SearchBar } from "@/components/navbar/search-bar";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <Navbar />
      <SearchBar />
    </div>
  );
}
