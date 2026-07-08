import { HeroBanner } from "@/components/homepage/hero-banner";
import { BestSellers } from "@/components/homepage/best-sellers";
import { CategoryCarousel } from "@/components/homepage/category-carousel";
import { DealsOfTheDay } from "@/components/homepage/deals-of-the-day";
import { PromotionalBanner } from "@/components/homepage/promotional-banner";
import { TrendingProducts } from "@/components/homepage/trending-products";
import { FeaturesRow } from "@/components/homepage/features-row";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <BestSellers />
      <CategoryCarousel />
      <DealsOfTheDay />
      <PromotionalBanner />
      <TrendingProducts />
      <FeaturesRow />
      <CustomerReviews />
      <Newsletter />
    </>
  );
}
