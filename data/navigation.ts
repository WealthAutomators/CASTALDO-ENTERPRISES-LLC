import { NavLink } from "@/types";

export const navigationLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Electronics", href: "/categories/electronics" },
  { label: "Home & Kitchen", href: "/categories/home-kitchen" },
  { label: "Beauty", href: "/categories/beauty" },
  { label: "Sports", href: "/categories/sports-outdoors" },
  { label: "Toys", href: "/categories/toys-games" },
  { label: "Deals", href: "/shop?sale=true" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Contact", href: "/contact" },
];

export const utilityBarLinks = [
  { label: "Free Shipping on Orders Over $50", href: "/shipping" },
  { label: "Track Order", href: "/track-order" },
  { label: "Help Center", href: "/faq" },
];

export const footerLinks = {
  marketplace: [
    { label: "Shop All", href: "/shop" },
    { label: "Electronics", href: "/categories/electronics" },
    { label: "Home & Kitchen", href: "/categories/home-kitchen" },
    { label: "Beauty", href: "/categories/beauty" },
    { label: "Sports", href: "/categories/sports-outdoors" },
    { label: "Toys & Games", href: "/categories/toys-games" },
    { label: "Deals", href: "/shop?sale=true" },
    { label: "New Arrivals", href: "/new-arrivals" },
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
