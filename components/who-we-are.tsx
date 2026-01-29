"use client"

import { MaskText } from "@/components/mask-text"
import { Shield, CheckCircle, Target } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Clarity Over Speculation",
    description: "Decisions driven by data and feasibility, not hype.",
  },
  {
    icon: Shield,
    title: "Legal Due Diligence",
    description: "In-depth title verification and ownership clarity.",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Execution",
    description: "From sourcing to negotiation and final closure.",
  },
]

export function WhoWeAre() {
  return (
    <section className="py-16 md:py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <MaskText>
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-6 font-[var(--font-heading)]">
              The Land Advisory You Should Have Had From Day One
            </h2>
          </MaskText>

          <MaskText delay={0.1}>
            <p className="text-xl text-charcoal/80 mb-6 font-medium">
              Bringing Order, Clarity & Confidence to Land and Property Deals.
            </p>
          </MaskText>

          <MaskText delay={0.2}>
            <p className="text-charcoal/70 leading-relaxed">
              Land has the potential to deliver exceptional long-term value — yet most transactions fail due to poor
              information, weak verification, and fragmented processes. Terrixa Realty was built to change that. We
              address the most common risks in land and property investments: incomplete ownership records, unverified
              information, and speculation-driven decisions.
            </p>
          </MaskText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <MaskText key={index} delay={0.3 + index * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 mb-4">
                  <feature.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2 font-[var(--font-heading)]">{feature.title}</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{feature.description}</p>
              </div>
            </MaskText>
          ))}
        </div>
      </div>
    </section>
  )
}
