"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Menu, Phone, ShoppingBag, User, X } from "lucide-react";
import { company } from "@/data/company";
import { navigationLinks } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  return (
    <header className="bg-white">
      <div className="border-b border-border">
        <Container>
          <div className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
            <Link href="/" className="shrink-0">
              <Image src="/logo/logo.svg" alt={company.name} width={180} height={48} priority />
            </Link>

            <div className="flex items-center gap-1 sm:gap-2">
              <a
                href={`tel:${company.phone.replace(/\D/g, "")}`}
                className="hidden items-center gap-1.5 text-sm text-muted-foreground hover:text-primary lg:flex"
              >
                <Phone className="h-4 w-4" />
                {company.phone}
              </a>

              <Button variant="ghost" size="icon" asChild className="relative">
                <Link href="/wishlist" aria-label="Wishlist">
                  <Heart className="h-5 w-5" />
                  {wishlist.length > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <Link href="/profile" aria-label="Log in">
                  <User className="h-5 w-5" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild className="relative">
                <Link href="/cart" aria-label="Cart">
                  <ShoppingBag className="h-5 w-5" />
                  {itemCount > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </Button>

              <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <nav className="hidden border-b border-border lg:block">
        <Container>
          <ul className="flex items-center gap-1">
            {navigationLinks.map((link) => (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="block px-4 py-3.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute left-0 top-full z-50 min-w-[200px] rounded-xl border border-border bg-white py-2 shadow-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {mobileOpen && (
        <div className="border-b border-border bg-white lg:hidden">
          <Container className="py-4">
            <ul className="space-y-1">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <a href={`tel:${company.phone.replace(/\D/g, "")}`} className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              {company.phone}
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
