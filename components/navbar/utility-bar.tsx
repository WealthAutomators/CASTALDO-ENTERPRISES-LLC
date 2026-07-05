"use client";

import Link from "next/link";
import { utilityBarLinks } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { Globe, DollarSign } from "lucide-react";

export function UtilityBar() {
  return (
    <div className="border-b border-border bg-muted/60">
      <Container>
        <div className="flex h-7 items-center justify-between text-[11px] text-muted-foreground">
          <div className="flex items-center gap-3 overflow-hidden sm:gap-4">
            {utilityBarLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-3 sm:gap-4">
                {i > 0 && <span className="hidden text-border sm:inline">|</span>}
                <Link
                  href={link.href}
                  className="whitespace-nowrap transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              className="flex items-center gap-1 transition-colors hover:text-primary"
              aria-label="Language selector"
            >
              <Globe className="h-3 w-3" />
              <span className="hidden sm:inline">EN</span>
            </button>
            <span className="text-border">|</span>
            <button
              type="button"
              className="flex items-center gap-1 transition-colors hover:text-primary"
              aria-label="Currency selector"
            >
              <DollarSign className="h-3 w-3" />
              <span>USD</span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
