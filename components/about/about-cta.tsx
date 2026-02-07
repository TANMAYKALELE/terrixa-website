"use client"

import { Button } from "@/components/ui/button"
import { MaskText } from "@/components/mask-text"
import Link from "next/link"

export function AboutCTA() {
  return (
    <section className="py-16 md:py-20 bg-gold text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <MaskText>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-[var(--font-heading)]">
              Build Your Property Strategy With Confidence
            </h2>
          </MaskText>

          <MaskText delay={0.1}>
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              Whether you are planning a land acquisition, residential investment, or commercial lease, our advisory team is ready to guide you.
            </p>
          </MaskText>

          <MaskText delay={0.2}>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-charcoal text-white hover:bg-charcoal/90 rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Consult a Terrixa Advisor
              </Button>
            </Link>
          </MaskText>
        </div>
      </div>
    </section>
  )
}
