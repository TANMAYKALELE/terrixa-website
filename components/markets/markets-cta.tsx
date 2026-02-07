"use client"

import { Button } from "@/components/ui/button"
import { MaskText } from "@/components/mask-text"
import Link from "next/link"

export function MarketsCTA() {
  return (
    <section className="py-16 md:py-20 bg-gold text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <MaskText>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-[var(--font-heading)]">
              Explore the Right Market for Your Property Goals
            </h2>
          </MaskText>

          <MaskText delay={0.1}>
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              Whether you are evaluating a land investment, residential purchase, or commercial lease, our advisors can guide you across the right locations.
            </p>
          </MaskText>

          <MaskText delay={0.2}>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-charcoal text-white hover:bg-charcoal/90 rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Speak to a Local Property Expert
              </Button>
            </Link>
          </MaskText>

          <MaskText delay={0.3}>
            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="text-white/80 font-medium">
                Terrixa Realty — Advisory Across Pune & High-Growth Real Estate Markets
              </p>
            </div>
          </MaskText>
        </div>
      </div>
    </section>
  )
}
