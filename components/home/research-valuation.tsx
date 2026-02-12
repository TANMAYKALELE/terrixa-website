"use client"

import { motion } from "framer-motion"
import { BarChart3, MapPin, TrendingUp, ShieldCheck } from "lucide-react"
import { staggerContainer, fadeUp } from "@/lib/motion"
import { useCountUp } from "@/hooks/use-count-up"

const services = [
  { icon: BarChart3, title: "Land and property valuation" },
  { icon: MapPin, title: "Location-specific feasibility studies" },
  { icon: TrendingUp, title: "Demand-supply and pricing trend analysis" },
  { icon: ShieldCheck, title: "Investment risk assessment" },
]

const stats = [
  { value: 10, suffix: "+", label: "Markets Covered" },
  { value: 4, suffix: "", label: "Core Services" },
  { value: 100, suffix: "%", label: "Research-Backed" },
]

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2000)
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-[#C5A065] font-[var(--font-heading)]">
        {count}{suffix}
      </div>
      <div className="text-charcoal/60 text-sm mt-1">{label}</div>
    </div>
  )
}

export function ResearchValuation() {
  return (
    <section className="py-24 md:py-32 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-gradient-to-r from-[#C5A065] to-[#E5C085] rounded-full mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3 font-[var(--font-heading)]">
            Research, Valuation & Market Intelligence
          </h2>
          <p className="text-lg text-charcoal/70 max-w-3xl mx-auto">
            Data That Drives Better Decisions
          </p>
          <p className="text-charcoal/60 mt-3 max-w-3xl mx-auto">
            Research is central to everything we do.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-12 border border-[#C5A065]/20 rounded-2xl bg-white p-6 md:p-8"
        >
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <StatCounter key={i} {...stat} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex items-center gap-4 bg-white border border-charcoal/10 rounded-xl p-5 hover:shadow-lg hover:border-[#C5A065]/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#C5A065]/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-[#C5A065]" />
                </div>
                <span className="text-charcoal font-medium text-sm">{service.title}</span>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-charcoal/70 max-w-3xl mx-auto"
        >
          This ensures our clients make <strong className="text-charcoal">informed, defensible, and future-ready property decisions</strong>.
        </motion.p>
      </div>
    </section>
  )
}
