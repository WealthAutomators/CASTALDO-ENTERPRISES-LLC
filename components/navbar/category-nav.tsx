"use client";

import Link from "next/link";
import { navigationLinks } from "@/data/navigation";
import { Container } from "@/components/ui/container";

export function CategoryNav() {
  return (
    <nav className="border-b border-border bg-white">
      <Container>
        <div className="overflow-x-auto scrollbar-none">
          <ul className="flex min-w-max items-center gap-0.5 py-1.5">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}
