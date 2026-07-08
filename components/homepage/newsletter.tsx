"use client";

import { useState } from "react";
import { newsletter } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-primary py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {newsletter.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            {newsletter.description}
          </p>
          {submitted ? (
            <p className="mt-10 text-sm font-medium text-secondary">
              Thank you for subscribing.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder={newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 flex-1 rounded-[6px] border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-secondary/40"
              />
              <Button
                type="submit"
                size="lg"
                className="shrink-0 bg-secondary text-white hover:bg-accent hover:text-white"
              >
                {newsletter.buttonText}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
