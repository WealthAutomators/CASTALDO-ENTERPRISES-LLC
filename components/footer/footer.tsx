import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { footerLinks, paymentMethods } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <Container className="py-20 md:py-24">
        <div className="mb-16">
          <Image
            src="/logo/logo.svg"
            alt={company.name}
            width={280}
            height={48}
            className="h-10 w-auto"
          />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            {company.tagline}
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-3 lg:gap-20">
          <div>
            <h3 className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground">
              Shop
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground">
              Support
            </h3>
            <ul className="space-y-3.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground">
              Contact
            </h3>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                {company.address.street}
                <br />
                {company.address.city}, {company.address.state}
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-secondary"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Separator />

      <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">{company.copyright}</p>
        <div className="flex items-center gap-2">
          {paymentMethods.map((method) => (
            <Image
              key={method.name}
              src={method.icon}
              alt={method.name}
              width={40}
              height={28}
            />
          ))}
        </div>
      </Container>
    </footer>
  );
}
