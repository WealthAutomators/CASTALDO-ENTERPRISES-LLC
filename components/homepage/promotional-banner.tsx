import Link from "next/link";
import { promotionalBanner } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="border-y border-border bg-white py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-8 h-px w-16 bg-secondary" />
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {promotionalBanner.title}
          </h2>
          {promotionalBanner.description && (
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              {promotionalBanner.description}
            </p>
          )}
          <Button asChild size="lg" className="mt-10">
            <Link href={promotionalBanner.buttonLink}>{promotionalBanner.buttonText}</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
