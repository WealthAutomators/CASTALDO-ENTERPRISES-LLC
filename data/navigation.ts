import { NavLink } from "@/types";

export const navigationLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Departments", href: "/categories" },
  { label: "Best Sellers", href: "/best-sellers" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Deals", href: "/shop?sale=true" },
  { label: "Brands", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export const announcementText = "Free Shipping On Orders Over $75 · Weekly Specials Inside";

export const utilityBarLinks = [
  { label: "Free Shipping", href: "/shipping" },
  { label: "Weekly Specials", href: "/shop?sale=true" },
  { label: "Gift Cards", href: "/shop" },
  { label: "Track Order", href: "/track-order" },
];

export const footerLinks = {
  marketplace: [
    { label: "Shop All", href: "/shop" },
    { label: "Departments", href: "/categories" },
    { label: "Electronics", href: "/categories/electronics" },
    { label: "Home & Kitchen", href: "/categories/home-kitchen" },
    { label: "Beauty", href: "/categories/beauty" },
    { label: "Deals", href: "/shop?sale=true" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
  ],
  customerService: [
    { label: "Contact Us", href: "/contact" },
    { label: "Track Order", href: "/track-order" },
    { label: "FAQs", href: "/faq" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Support", href: "/contact" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
    { label: "About Us", href: "/about" },
  ],
};

export const paymentMethods = [
  { name: "Visa", icon: "/payments/visa.svg" },
  { name: "Mastercard", icon: "/payments/mastercard.svg" },
  { name: "Amex", icon: "/payments/amex.svg" },
  { name: "PayPal", icon: "/payments/paypal.svg" },
  { name: "Apple Pay", icon: "/payments/apple-pay.svg" },
];
