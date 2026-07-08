import Link from "next/link";
import { promotionalBanner } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-2xl shadow-md">
          <div className="absolute inset-0 bg-gradient-to-r from-[#DC2626] via-[#B91C1C] to-[#991B1B]" />
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-secondary/20 to-transparent" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
          <div className="absolute -bottom-8 left-1/4 h-24 w-24 rounded-full bg-secondary/15" />
          <div className="relative flex flex-col items-start justify-center p-8 md:p-12 lg:p-16">
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-4xl">
              {promotionalBanner.title}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-white/85">{promotionalBanner.description}</p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:text-secondary-foreground"
            >
              <Link href={promotionalBanner.buttonLink}>{promotionalBanner.buttonText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
