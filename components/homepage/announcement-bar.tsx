"use client";

import Link from "next/link";
import { company } from "@/data/company";
import { Container } from "@/components/ui/container";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-center text-xs font-medium text-white sm:text-sm">
      <Container className="py-2">
        <p>
          Welcome to {company.name} — {company.tagline}{" "}
          <Link href="/shop?sale=true" className="ml-1 underline underline-offset-2 transition-colors hover:text-accent">
            Shop Deals →
          </Link>
        </p>
      </Container>
    </div>
  );
}
