import { HeroBanner } from "@/components/homepage/hero-banner";
import { FeaturedCollections } from "@/components/homepage/featured-collections";
import { CategoryCarousel } from "@/components/homepage/category-carousel";
import { PromotionalBanner } from "@/components/homepage/promotional-banner";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { DealsOfTheDay } from "@/components/homepage/deals-of-the-day";
import { FeaturesRow } from "@/components/homepage/features-row";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedCollections />
      <CategoryCarousel />
      <PromotionalBanner />
      <FeaturedCollection />
      <DealsOfTheDay />
      <FeaturesRow />
      <CustomerReviews />
      <NewArrivals />
      <Newsletter />
    </>
  );
}
