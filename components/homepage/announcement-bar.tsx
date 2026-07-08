"use client";

import Link from "next/link";
import { Truck } from "lucide-react";
import { announcementText } from "@/data/navigation";
import { Container } from "@/components/ui/container";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-center text-xs font-medium text-white sm:text-sm">
      <Container className="flex items-center justify-center gap-2 py-2">
        <Truck className="h-3.5 w-3.5 text-secondary" />
        <p>
          {announcementText}
          <Link
            href="/shop?sale=true"
            className="ml-2 font-semibold text-secondary underline-offset-2 transition-colors hover:underline"
          >
            Shop Deals →
          </Link>
        </p>
      </Container>
    </div>
  );
}
