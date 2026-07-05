import Link from "next/link";
import { promotionalBanner } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D6E8F5] via-[#E8F0F8] to-[#C5DBF0]" />
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-accent/15 to-transparent" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5" />
          <div className="absolute -bottom-8 left-1/4 h-24 w-24 rounded-full bg-accent/10" />
          <div className="relative flex flex-col items-start justify-center p-8 md:p-12 lg:p-16">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              {promotionalBanner.title}
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{promotionalBanner.description}</p>
            <Button asChild size="lg" variant="accent" className="mt-8">
              <Link href={promotionalBanner.buttonLink}>{promotionalBanner.buttonText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
