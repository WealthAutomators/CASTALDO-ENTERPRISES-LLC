import { AnnouncementBar } from "@/components/homepage/announcement-bar";
import { HeroBanner } from "@/components/homepage/hero-banner";
import { DealsOfTheDay } from "@/components/homepage/deals-of-the-day";
import { TrendingProducts } from "@/components/homepage/trending-products";
import { CategoryCarousel } from "@/components/homepage/category-carousel";
import { FeaturesRow } from "@/components/homepage/features-row";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { PromotionalBanner } from "@/components/homepage/promotional-banner";
import { BestSellers } from "@/components/homepage/best-sellers";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <HeroBanner />
      <DealsOfTheDay />
      <TrendingProducts />
      <CategoryCarousel />
      <FeaturesRow />
      <FeaturedCollection />
      <PromotionalBanner />
      <BestSellers />
      <CustomerReviews />
      <Newsletter />
    </>
  );
}
