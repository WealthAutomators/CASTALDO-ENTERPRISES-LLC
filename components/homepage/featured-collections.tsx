"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredCollections } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedCollections() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <SectionHeading
          title="Featured Collections"
          subtitle="Curated edits across the categories our customers love most."
          centered
        />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {featuredCollections.map((collection) => (
            <Link
              key={collection.id}
              href={collection.href}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent transition-opacity duration-300 group-hover:from-primary/90" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <h3 className="text-base font-semibold text-white drop-shadow md:text-lg">
                    {collection.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-white/85 md:text-sm">{collection.subtitle}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-secondary">
                    Shop now
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
