import {
  Feature,
  HeroSlide,
  PromoBanner,
} from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "Elevate Everyday Living.",
    description:
      "Discover thoughtfully selected products for every room, every lifestyle and every season.",
    ctaText: "Explore Collection",
    ctaLink: "/shop",
    secondaryCtaText: "New Arrivals",
    secondaryCtaLink: "/new-arrivals",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Complimentary Shipping",
    description: "Free shipping on orders over $75. Most orders arrive in 3–5 business days.",
  },
  {
    id: "2",
    icon: "shield",
    title: "Secure Checkout",
    description: "Your payment details are protected with industry-standard encryption.",
  },
  {
    id: "3",
    icon: "star",
    title: "Curated Quality",
    description: "Every product is carefully selected for craftsmanship, design, and lasting value.",
  },
  {
    id: "4",
    icon: "rotate",
    title: "Effortless Returns",
    description: "Hassle-free 30-day returns on most items. We make it simple.",
  },
];

export const featuredCollections = [
  {
    id: "1",
    title: "Modern Living",
    subtitle: "Refined pieces for contemporary spaces",
    href: "/categories/home-kitchen",
    image: "/categories/home-kitchen.jpg",
  },
  {
    id: "2",
    title: "Smart Home",
    subtitle: "Intelligent design for connected living",
    href: "/categories/electronics",
    image: "/categories/electronics.jpg",
  },
  {
    id: "3",
    title: "Weekend Essentials",
    subtitle: "Elevated comfort for leisure hours",
    href: "/categories/sports-outdoors",
    image: "/categories/sports-outdoors.jpg",
  },
  {
    id: "4",
    title: "Family Favorites",
    subtitle: "Thoughtful finds for every generation",
    href: "/categories/toys-games",
    image: "/categories/toys-games.jpg",
  },
];

export const editorialBanner = {
  title: "A quieter way to shop.",
  description:
    "Less noise. More intention. Explore collections shaped around how you actually live — not the latest trend cycle.",
  ctaText: "View Collections",
  ctaLink: "/categories",
  image: "/banners/featured.jpg",
};

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
  title: "Quality Without Compromise",
  description:
    "Premium materials. Thoughtful design. Products chosen to last — not just to fill a cart.",
  buttonText: "Browse Products",
  buttonLink: "/shop",
  image: "/banners/featured.jpg",
};

export const featuredCollection = {
  title: "Featured Products",
  description:
    "Hand-selected pieces across electronics, home, beauty, and more — curated for modern living.",
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
  title: "Stay Inspired.",
  description:
    "Join our newsletter for exclusive launches, seasonal collections and special offers.",
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
  title: "Designed Around Your Everyday.",
  description:
    "CASTALDO ENTERPRISES LLC exists for people who want their homes — and their routines — to feel considered. We curate electronics, home essentials, beauty, fashion, and lifestyle pieces that balance form with function, so modern living feels effortless rather than overcrowded.",
  checklist: [
    "Editorially curated across every category",
    "Quality-first selection over endless inventory",
    "Spaces designed for calm, clarity, and comfort",
    "A shopping experience built around intention",
  ],
  buttonText: "Shop Now",
  buttonLink: "/shop",
  image: "/banners/about.jpg",
};
