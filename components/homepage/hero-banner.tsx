"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/homepage";
import { company } from "@/data/company";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];

  return (
    <section className="relative h-[90vh] min-h-[560px] w-full overflow-hidden bg-primary">
      <Image
        src={slide.image}
        alt={slide.headline}
        fill
        priority
        className="object-cover object-[72%_center]"
        sizes="100vw"
      />
      {/* Soft full-frame dim */}
      <div className="absolute inset-0 bg-black/35" />
      {/* Strong left scrim behind copy + nav for guaranteed contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />

      <Container className="relative flex h-full items-end pb-16 pt-28 md:pb-20 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white/75">
            {company.name}
          </p>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {slide.headline}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
            {slide.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="min-w-[160px] border border-white bg-white text-primary hover:border-secondary hover:bg-secondary hover:text-white"
            >
              <Link href={slide.ctaLink}>{slide.ctaText}</Link>
            </Button>
            {slide.secondaryCtaText && slide.secondaryCtaLink && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-w-[160px] border-white bg-transparent text-white hover:border-white hover:bg-white hover:text-primary"
              >
                <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
