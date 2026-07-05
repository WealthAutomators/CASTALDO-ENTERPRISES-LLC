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
    <section className="bg-accent py-12 md:py-16">
      <Container>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SectionHeading title="Flash Sale" className="mb-0 [&_h2]:text-white" />
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-white/90">Ends in:</span>
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
