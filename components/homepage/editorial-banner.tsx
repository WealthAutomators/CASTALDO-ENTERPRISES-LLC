"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { editorialBanner } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function EditorialBanner() {
  return (
    <section className="relative py-0">
      <div className="relative min-h-[420px] w-full overflow-hidden md:min-h-[520px]">
        <Image
          src={editorialBanner.image}
          alt={editorialBanner.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <Container className="relative flex min-h-[420px] items-center md:min-h-[520px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg py-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              {editorialBanner.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
              {editorialBanner.description}
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-white text-primary hover:bg-secondary hover:text-white"
            >
              <Link href={editorialBanner.ctaLink}>{editorialBanner.ctaText}</Link>
            </Button>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
