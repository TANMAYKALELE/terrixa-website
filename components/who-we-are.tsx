"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle, Target, AlertTriangle, Check } from "lucide-react"
import { staggerContainer, fadeUp } from "@/lib/motion"

const risks = [
  "Incomplete or unclear ownership records",
  "Unverified and inconsistent property information",
  "Excessive dependence on intermediaries",
  "Decisions influenced by speculation rather than facts",
]

const solutions = [
  "Legally verified ownership clarity",
  "Data-backed market intelligence",
  "Direct, transparent advisory process",
  "Decisions driven by facts and feasibility",
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
    <section className="py-24 md:py-32 bg-off-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-gradient-to-r from-[#C5A065] to-[#E5C085] rounded-full mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-5 font-[var(--font-heading)]">
            The Land Advisory You Should Have Had From Day One
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Bringing Order, Clarity & Confidence to Land and Property Deals
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-charcoal/70 text-lg max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Land has the potential to deliver exceptional long-term value — yet most transactions fail due to <strong className="text-charcoal">poor information, weak verification, and fragmented processes</strong>. Terrixa Realty was built to change that.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="h-full order-1 lg:order-2"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 60px rgba(197, 160, 101, 0.25)",
              transition: { duration: 0.3 }
            }}
            style={{ willChange: 'transform' }}
          >
            <div className="bg-gradient-to-br from-[#C5A065]/15 to-[#C5A065]/10 border-[3px] border-[#C5A065]/50 rounded-2xl p-8 h-full shadow-2xl shadow-[#C5A065]/20 ring-2 ring-[#C5A065]/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#C5A065]/20 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-[#C5A065]" />
                </div>
                <span className="text-charcoal font-semibold text-lg tracking-wide">Our Structured Approach</span>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {solutions.map((solution, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-3 text-charcoal/80"
                  >
                    <Check className="text-[#C5A065] mt-1 flex-shrink-0 h-5 w-5" />
                    <span className="leading-relaxed">{solution}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-full order-2 lg:order-1"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            style={{ willChange: 'transform' }}
          >
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 h-full border border-neutral-700/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                </div>
                <span className="text-white font-semibold text-lg tracking-wide">Common Risks We Address</span>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {risks.map((risk, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <span className="text-red-400 mt-1 flex-shrink-0 text-lg">&#x2716;</span>
                    <span className="leading-relaxed">{risk}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-charcoal/10 rounded-2xl p-8 max-w-4xl mx-auto mb-20 text-center"
        >
          <p className="text-charcoal/80 text-lg leading-relaxed">
            <strong className="text-charcoal">No technical clutter. No inflated projections. No avoidable surprises.</strong>
            <br />
            Only straightforward guidance, professional execution, and confidence throughout the journey.
          </p>
        </motion.div>

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
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 text-center border border-charcoal/10 hover:border-[#C5A065]/30 hover:shadow-lg transition-all duration-300 group"
              style={{ willChange: 'transform' }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#C5A065]/10 mb-5 group-hover:bg-[#C5A065]/20 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-[#C5A065]" />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2 font-[var(--font-heading)]">{feature.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
