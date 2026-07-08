import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/ui/star-rating";

export function CustomerReviews() {
  return (
    <section className="bg-background py-20 md:py-28">
      <Container>
        <SectionHeading
          title="Customer Reviews"
          subtitle="What our community says about shopping with Castaldo."
          centered
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.id} className="relative py-2">
              <span
                aria-hidden
                className="pointer-events-none select-none font-serif text-6xl leading-none text-secondary/30"
              >
                &ldquo;
              </span>
              <StarRating rating={t.rating} showCount={false} size="sm" />
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                {t.text}
              </p>
              <p className="mt-6 text-sm font-medium tracking-wide">{t.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{t.location}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
