import {
  Feature,
  HeroSlide,
  PromoBanner,
} from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "Everything You Love. All In One Store.",
    description:
      "Discover electronics, home essentials, beauty products, toys, sports gear and more.",
    ctaText: "Shop Now",
    ctaLink: "/shop",
    secondaryCtaText: "Explore Deals",
    secondaryCtaLink: "/shop?sale=true",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "star",
    title: "Premium Quality",
    description: "Every product is carefully selected for quality, value, and lasting reliability.",
  },
  {
    id: "2",
    icon: "truck",
    title: "Fast Shipping",
    description: "Free shipping on orders over $75. Most orders arrive in 3–5 business days.",
  },
  {
    id: "3",
    icon: "shield",
    title: "Secure Checkout",
    description: "Your payment details are protected with industry-standard encryption.",
  },
  {
    id: "4",
    icon: "rotate",
    title: "Easy Returns",
    description: "Hassle-free 30-day returns on most items. We make it simple.",
  },
];

export const featuredCollections = [
  {
    id: "1",
    title: "Tech & Electronics",
    subtitle: "Audio, gadgets & smart gear",
    href: "/categories/electronics",
    image: "/categories/electronics.jpg",
  },
  {
    id: "2",
    title: "Home & Kitchen",
    subtitle: "Essentials for everyday living",
    href: "/categories/home-kitchen",
    image: "/categories/home-kitchen.jpg",
  },
  {
    id: "3",
    title: "Beauty & Wellness",
    subtitle: "Skincare & self-care favorites",
    href: "/categories/beauty",
    image: "/categories/beauty.jpg",
  },
  {
    id: "4",
    title: "Play & Learn",
    subtitle: "Toys, games & educational fun",
    href: "/categories/toys-games",
    image: "/categories/toys-games.jpg",
  },
];

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "wireless-earbuds",
  "electric-kettle",
  "air-fryer",
  "dog-bed",
  "bath-towel-set",
  "sunglasses-classic",
] as const;

export const homepageTrendingSlugs = [
  "wireless-earbuds",
  "bluetooth-speaker",
  "air-fryer",
  "kids-learning-tablet",
  "yoga-mat",
  "gaming-headset",
  "vitamin-c-serum-set",
  "standing-desk-lamp",
] as const;

export const homepageBestsellerSlugs = [
  "wireless-earbuds",
  "bluetooth-speaker",
  "bath-towel-set",
  "yoga-mat",
  "kids-learning-tablet",
  "coffee-grinder",
  "dog-bed",
  "electric-kettle",
] as const;

export const homepageFeaturedSlugs = [
  "wireless-earbuds",
  "electric-kettle",
  "bath-towel-set",
  "kids-learning-tablet",
  "standing-desk-lamp",
  "air-fryer",
  "yoga-mat",
  "dog-bed",
  "coffee-grinder",
  "bluetooth-speaker",
] as const;

export const homepageNewArrivalSlugs = [
  "stem-robot-kit",
  "vitamin-c-serum-set",
  "baby-monitor",
  "foam-roller",
  "rgb-gaming-keyboard",
  "controller-charging-dock",
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Everything You Need For Everyday Living",
  description:
    "Explore thousands of products across every category with quality you can trust.",
  buttonText: "Browse Collection",
  buttonLink: "/shop",
  image: "/banners/featured.jpg",
};

export const featuredCollection = {
  title: "Featured Products",
  description:
    "Hand-picked favorites across electronics, home, beauty, and more — everything you need in one place.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "electronics",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Electronics", slug: "electronics" },
  { label: "Home & Kitchen", slug: "home-kitchen" },
  { label: "Beauty", slug: "beauty" },
  { label: "Sports", slug: "sports-outdoors" },
];

export const newsletter = {
  title: "Stay Updated With Our Best Deals",
  description:
    "Subscribe for exclusive promotions, discounts and new arrivals.",
  placeholder: "Enter your email address",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export const aboutSection = {
  title: "Shopping Made Easy.",
  description:
    "SAI HOLDING LLC brings together quality products across multiple categories, helping families find everything they need in one trusted online marketplace. We focus on quality, reliability, and a smooth shopping experience from browsing to checkout.",
  checklist: [
    "Wide selection across 13+ categories",
    "Competitive prices on everyday essentials",
    "Fast, reliable shipping nationwide",
    "Dedicated customer support team",
  ],
  buttonText: "Learn More About Us",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};
