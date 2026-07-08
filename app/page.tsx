import { HeroBanner } from "@/components/homepage/hero-banner";
import { FeaturedCollections } from "@/components/homepage/featured-collections";
import { EditorialBanner } from "@/components/homepage/editorial-banner";
import { BestSellers } from "@/components/homepage/best-sellers";
import { SplitLifestyleSection } from "@/components/homepage/split-lifestyle-section";
import { TrendingProducts } from "@/components/homepage/trending-products";
import { PromotionalBanner } from "@/components/homepage/promotional-banner";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedCollections />
      <EditorialBanner />
      <BestSellers />
      <SplitLifestyleSection />
      <TrendingProducts />
      <PromotionalBanner />
      <CustomerReviews />
      <Newsletter />
    </>
  );
}
