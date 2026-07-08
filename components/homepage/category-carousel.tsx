"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const homepageCategorySlugs = [
  "electronics",
  "home-kitchen",
  "beauty",
  "sports-outdoors",
  "toys-games",
  "gaming",
  "pet-supplies",
  "baby-products",
  "office-supplies",
  "fashion-accessories",
  "health-wellness",
  "educational-toys",
];

export function CategoryCarousel() {
  const homepageCategories = categories.filter((c) => homepageCategorySlugs.includes(c.slug));

  return (
    <section className="py-8 md:py-10">
      <Container>
        <SectionHeading title="Shop By Department" centered />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {homepageCategories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent transition-colors duration-300 group-hover:from-primary/75 group-hover:via-primary/30" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-sm font-semibold text-white drop-shadow-md md:text-base">
                    {category.name}
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
