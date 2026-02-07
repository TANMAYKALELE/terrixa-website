"use client"

import { Button } from "@/components/ui/button"
import { MaskText } from "@/components/mask-text"
import Link from "next/link"

export function HomeCTA() {
  return (
    <section className="py-16 md:py-20 bg-gold text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <MaskText>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-[var(--font-heading)]">
              Invest in Land & Property With Confidence
            </h2>
          </MaskText>

          <MaskText delay={0.1}>
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              Whether you're evaluating land, plotting, residential purchases, or commercial leases, Terrixa Realty brings the clarity and discipline required to move forward with certainty.
            </p>
          </MaskText>

          <MaskText delay={0.2}>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-charcoal text-white hover:bg-charcoal/90 rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Speak With a Terrixa Advisor
              </Button>
            </Link>
          </MaskText>

          <MaskText delay={0.3}>
            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="text-white/80 font-medium">
                Terrixa Realty — Land & Property Advisory for Smarter Decisions
              </p>
              <p className="text-white/60 text-sm mt-1">
                Serving Pune and Emerging Growth Markets
              </p>
            </div>
          </MaskText>
        </div>
      </div>
    </section>
  )
}
