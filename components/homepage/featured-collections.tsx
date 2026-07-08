"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featuredCollections } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturedCollections() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Featured Collections"
          subtitle="Four editorial edits spanning modern living, smart home, weekends, and family life."
          centered
        />
        <div className="mt-4 grid gap-5 md:grid-cols-2 lg:gap-6">
          {featuredCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={collection.href}
                className="group relative block aspect-[16/10] overflow-hidden rounded-[6px] bg-muted"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {collection.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-white/80 md:text-base">
                    {collection.subtitle}
                  </p>
                  <span className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.16em] text-secondary transition-colors group-hover:text-accent">
                    Explore
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
