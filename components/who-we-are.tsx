"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle, Target, AlertTriangle } from "lucide-react"
import { staggerContainer, fadeUp } from "@/lib/motion"

const risks = [
  "Incomplete or unclear ownership records",
  "Unverified and inconsistent property information",
  "Excessive dependence on intermediaries",
  "Decisions influenced by speculation rather than facts",
]

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
    <section className="py-20 md:py-28 bg-off-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-gradient-to-r from-[#C5A065] to-[#E5C085] rounded-full mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4 font-[var(--font-heading)]">
            The Land Advisory You Should Have Had From Day One
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Bringing Order, Clarity & Confidence to Land and Property Deals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-charcoal/70 leading-relaxed mb-6 text-lg">
              Land has the potential to deliver exceptional long-term value — yet most transactions fail due to <strong className="text-charcoal">poor information, weak verification, and fragmented processes</strong>.
            </p>
            <p className="text-charcoal/80 font-medium mb-5">
              Terrixa Realty was built to change that.
            </p>

            <div className="bg-charcoal rounded-2xl p-6 border border-charcoal/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="h-4 w-4 text-red-400" />
                </div>
                <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">Common Risks We Address</span>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {risks.map((risk, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-3 text-white/70 text-sm"
                  >
                    <span className="text-red-400/80 mt-0.5 flex-shrink-0">&#x2716;</span>
                    {risk}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-charcoal/70 leading-relaxed mb-4">
              Our objective is clear: to create a <strong className="text-charcoal">structured, transparent, and risk-aware path</strong> for land and property investments.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              By combining <strong className="text-charcoal">ground-level market knowledge, legal due diligence, valuation analysis, and disciplined advisory</strong>, we ensure every opportunity we recommend is <strong className="text-charcoal">legally sound, strategically positioned, and aligned with long-term investment goals</strong>.
            </p>

            <div className="bg-gradient-to-br from-[#C5A065]/5 to-[#C5A065]/10 border border-[#C5A065]/20 rounded-2xl p-6">
              <p className="text-charcoal/80 leading-relaxed text-lg font-medium mb-2">
                No technical clutter. No inflated projections. No avoidable surprises.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Only <strong className="text-charcoal">straightforward guidance, professional execution, and confidence throughout the journey</strong>.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative bg-white rounded-2xl p-8 text-center border border-charcoal/5 hover:border-[#C5A065]/30 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#C5A065]/10 mb-5 group-hover:bg-[#C5A065]/20 transition-colors duration-300">
                <feature.icon className="h-7 w-7 text-[#C5A065]" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2 font-[var(--font-heading)]">{feature.title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">{feature.description}</p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C5A065] to-transparent rounded-b-2xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
