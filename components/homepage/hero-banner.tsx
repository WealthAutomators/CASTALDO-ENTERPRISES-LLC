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
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-[#FEE2E2] via-[#FAFAFA] to-white">
      <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
      <Container className="relative py-10 md:py-14 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block rounded-xl bg-secondary px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-secondary-foreground shadow-sm">
              {company.tagline}
            </span>
            <h1 className="mt-4 whitespace-pre-line text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              {slide.headline}
            </h1>
            <p className="mt-3 max-w-lg text-base text-muted-foreground sm:text-lg">
              {slide.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={slide.ctaLink}>{slide.ctaText}</Link>
              </Button>
              {slide.secondaryCtaText && slide.secondaryCtaLink && (
                <Button asChild size="lg" variant="outline">
                  <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
                </Button>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-white shadow-md lg:aspect-[5/4]">
              <Image
                src={slide.image}
                alt={slide.headline.replace("\n", " ")}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.35 }}
              className="absolute -right-2 -top-2 rounded-xl bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground shadow-lg sm:-right-4 sm:-top-4 sm:px-5 sm:py-2.5 sm:text-base"
            >
              Up to 30% Off
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
