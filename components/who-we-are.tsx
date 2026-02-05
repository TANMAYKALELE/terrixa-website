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
              Bringing Order, Clarity & Confidence to Land and Property Deals
            </p>
          </MaskText>

          <MaskText delay={0.2}>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              Land has the potential to deliver exceptional long-term value — yet most transactions fail due to <strong>poor information, weak verification, and fragmented processes</strong>.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              Terrixa Realty was built to change that.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-2">
              We address the most common risks in land and property investments:
            </p>
            <ul className="text-charcoal/70 leading-relaxed mb-4 list-disc list-inside space-y-1">
              <li>Incomplete or unclear ownership records</li>
              <li>Unverified and inconsistent property information</li>
              <li>Excessive dependence on intermediaries</li>
              <li>Decisions influenced by speculation rather than facts</li>
            </ul>
            <p className="text-charcoal/70 leading-relaxed mb-2">
              Our objective is clear:
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              to create a <strong>structured, transparent, and risk-aware path</strong> for land and property investments.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              By combining <strong>ground-level market knowledge, legal due diligence, valuation analysis, and disciplined advisory</strong>, we ensure every opportunity we recommend is <strong>legally sound, strategically positioned, and aligned with long-term investment goals</strong>.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              No technical clutter.<br />
              No inflated projections.<br />
              No avoidable surprises.
            </p>
            <p className="text-charcoal/70 leading-relaxed mt-4">
              Only <strong>straightforward guidance, professional execution, and confidence throughout the journey</strong>.
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
