import {
  Feature,
  HeroSlide,
  InstagramPost,
  ProductSection,
  PromoBanner,
} from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "Premium Towels For Every Home",
    description:
      "Discover ultra-soft, long-lasting towels crafted from the finest materials for everyday luxury.",
    ctaText: "Shop Now",
    ctaLink: "/shop",
  },
  {
    id: "2",
    image: "/hero/hero-2.jpg",
    headline: "Summer Beach Collection",
    description:
      "Bold colors and quick-dry fabrics designed for sunny days by the water.",
    ctaText: "Explore Collection",
    ctaLink: "/categories/beach-towels",
  },
  {
    id: "3",
    image: "/hero/hero-3.jpg",
    headline: "Spa-Level Bathrobes",
    description:
      "Wrap yourself in plush comfort with our bestselling robe collection.",
    ctaText: "Shop Bathrobes",
    ctaLink: "/categories/bathrobes",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Fast Shipping",
    description: "Free shipping on orders over $75. Delivered in 3–5 business days.",
  },
  {
    id: "2",
    icon: "shield",
    title: "Secure Checkout",
    description: "Your payment information is protected with industry-standard encryption.",
  },
  {
    id: "3",
    icon: "award",
    title: "Quality Guaranteed",
    description: "Every product is backed by our 30-day satisfaction guarantee.",
  },
  {
    id: "4",
    icon: "headphones",
    title: "Customer Support",
    description: "Our team is available Mon–Fri to help with orders and product questions.",
  },
];

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

/** Curated product lists — no slug appears twice across homepage sections */
export const homepageDealsSlugs = [
  "luxury-cotton-bath-towel-set",
  "coastal-stripe-beach-towel",
  "plush-hooded-bathrobe",
  "monogrammed-gift-set",
] as const;

export const homepageBestsellerSlugs = [
  "organic-bath-sheet",
  "spa-terry-bath-towel",
  "premium-hand-towel-set",
  "microfiber-cleaning-cloth-set",
] as const;

export const homepageFeaturedSlugs = [
  "quick-dry-bath-towel",
  "striped-bath-towel-pair",
  "waffle-knit-robe",
  "soft-face-cloth-set",
] as const;

export const homepageSectionSlugs: Record<string, readonly string[]> = {
  "cleaning-towels": [
    "glass-cleaning-cloths",
    "cotton-dish-towel-pack",
    "shop-towel-roll",
    "exfoliating-face-cloths",
  ],
  "beach-towels": [
    "tropical-print-beach-towel",
    "compact-travel-beach-towel",
    "cabana-stripe-beach-towel",
  ],
  accessories: [
    "towel-ladder-rack",
    "wall-mounted-towel-hooks",
    "towel-storage-basket",
  ],
  "face-towels": ["bamboo-face-towels", "spa-washcloth-trio"],
};

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Refresh Your Bathroom Essentials",
  description:
    "Save up to 30% on select bath towel sets this week. Limited quantities available while supplies last.",
  buttonText: "Shop the Sale",
  buttonLink: "/shop?sale=true",
  image: "/banners/promo-1.jpg",
};

export const aboutSection = {
  title: "Crafted For Comfort, Built To Last",
  description:
    "At Otanwa Commerce, we believe everyday essentials should feel exceptional. Our towels are sourced from premium cotton and designed to stay soft wash after wash.",
  checklist: [
    "100% premium long-staple cotton",
    "OEKO-TEX certified materials",
    "Ethically sourced manufacturing",
    "Satisfaction guaranteed or your money back",
  ],
  buttonText: "Learn More About Us",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};

export const featuredCollection = {
  title: "The Signature Collection",
  description:
    "Our most-loved towels, chosen by thousands of customers for their softness, absorbency, and timeless style.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "bath-towels",
};

export const productSections: ProductSection[] = [
  {
    id: "1",
    title: "Cleaning Towels",
    categorySlug: "cleaning-towels",
    viewMoreLink: "/categories/cleaning-towels",
  },
  {
    id: "2",
    title: "Beach Towels",
    categorySlug: "beach-towels",
    viewMoreLink: "/categories/beach-towels",
  },
  {
    id: "3",
    title: "Accessories",
    categorySlug: "accessories",
    viewMoreLink: "/categories/accessories",
  },
  {
    id: "4",
    title: "Face Towels",
    categorySlug: "face-towels",
    viewMoreLink: "/categories/face-towels",
  },
];

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Bath Towels", slug: "bath-towels" },
  { label: "Bathrobes", slug: "bathrobes" },
  { label: "Cleaning Towels", slug: "cleaning-towels" },
];

export const instagramPosts: InstagramPost[] = [
  { id: "1", image: "/instagram/1.jpg", alt: "Folded bath towels on a wooden shelf" },
  { id: "2", image: "/instagram/2.jpg", alt: "Spa bathroom with soft white linens" },
  { id: "3", image: "/instagram/3.jpg", alt: "Colorful beach towels by the pool" },
  { id: "4", image: "/instagram/4.jpg", alt: "Minimal bathroom styling with cotton towels" },
  { id: "5", image: "/instagram/5.jpg", alt: "Stacked hand towels in neutral tones" },
  { id: "6", image: "/instagram/6.jpg", alt: "Luxury linen display in a bright bathroom" },
];

export const newsletter = {
  title: "Join the Otanwa Community",
  description:
    "Subscribe for exclusive offers, new arrivals, and styling inspiration delivered to your inbox.",
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
