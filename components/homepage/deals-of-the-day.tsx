"use client";

import { dealsEndTime, homepageDealsSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";

export function DealsOfTheDay() {
  const deals = getProductsBySlugs(homepageDealsSlugs);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FEF3C7] via-[#FEF9C3]/60 to-[#FEE2E2]/40 py-12 md:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-teal" />
      <Container>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wide text-secondary-foreground shadow-sm">
              Flash Deals
            </span>
            <SectionHeading title="Limited-Time Offers" className="mb-0" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Ends in:</span>
            <CountdownTimer endTime={dealsEndTime} />
          </div>
        </div>
        <Carousel slidesToShow={4} className="px-8">
          {deals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
