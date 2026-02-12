"use client"

import { motion } from "framer-motion"
import { BarChart3, Target, Trophy } from "lucide-react"

const principles = [
  {
    icon: BarChart3,
    title: "Data over Hype",
    description: "Market assumptions backed by transaction records, price trends, and infrastructure timelines.",
  },
  {
    icon: Target,
    title: "Feasibility over Assumptions",
    description: "Every recommendation passes legal, financial, and practical viability tests before client presentation.",
  },
  {
    icon: Trophy,
    title: "Long-term Value over Short-term Deals",
    description: "We prioritize sustainable wealth creation. Quick exits are opportunities, not strategies.",
  },
]

export function BusinessManifesto() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#1a1a1a] to-[#1a1a1a]/95 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gold rounded-full blur-[150px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#7A9B76] rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 w-24 bg-gradient-to-r from-gold to-[#C5A065] rounded-full mx-auto mb-8"
          />

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-[var(--font-heading)] leading-tight">
            Clarity Over Speculation.
          </h2>

          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Our business philosophy is simple: we don't sell dreams. We deliver research-backed advisory
            that transforms market complexity into actionable investment intelligence.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.15 }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -12, transition: { duration: 0.3 } }}
                  className="relative h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                  <div className="relative bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8 h-full hover:border-gold/30 transition-all duration-500">
                    <div className="mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex p-4 bg-gold/10 rounded-2xl border border-gold/20"
                      >
                        <Icon className="h-8 w-8 text-gold" />
                      </motion.div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[var(--font-heading)] group-hover:text-gold transition-colors duration-300">
                      {principle.title}
                    </h3>

                    <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {principle.description}
                    </p>

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold to-transparent rounded-bl-2xl"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-20"
        >
          <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-6">
            <p className="text-white/80 text-lg">
              This is how we build trust. This is how we deliver results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
