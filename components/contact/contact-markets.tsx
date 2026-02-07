"use client"

import { motion } from "framer-motion"
import { staggerContainer } from "@/lib/motion"

const lifestyleMarkets = ["Karjat", "Lonavala", "Khandala", "Kamshet", "Pawna"]
const urbanMarkets = ["Pune", "Hinjewadi", "Wakad", "Ravet", "Talegaon"]

const pillVariant = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
    },
  },
}

export function ContactMarkets() {
  return (
    <section className="py-12 md:py-16 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-3 font-[var(--font-heading)]">
            Markets We Serve
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto text-center space-y-6">
          {/* Lifestyle Markets */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold uppercase tracking-widest text-[#C5A065] mb-3"
            >
              Lifestyle &amp; Retreat
            </motion.p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-2"
            >
              {lifestyleMarkets.map((market, i) => (
                <motion.span
                  key={i}
                  variants={pillVariant}
                  whileHover={{
                    y: -2,
                    boxShadow: "0 0 16px rgba(197,160,101,0.3)",
                    borderColor: "rgba(197,160,101,0.6)",
                    transition: { duration: 0.2 },
                  }}
                  className="px-5 py-2.5 bg-white border border-charcoal/10 rounded-full text-charcoal/80 text-sm font-medium cursor-pointer transition-colors duration-200"
                >
                  {market}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Urban Markets */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xs font-semibold uppercase tracking-widest text-[#C5A065] mb-3"
            >
              Urban &amp; Growth Corridor
            </motion.p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-2"
            >
              {urbanMarkets.map((market, i) => (
                <motion.span
                  key={i}
                  variants={pillVariant}
                  whileHover={{
                    y: -2,
                    boxShadow: "0 0 16px rgba(197,160,101,0.3)",
                    borderColor: "rgba(197,160,101,0.6)",
                    transition: { duration: 0.2 },
                  }}
                  className="px-5 py-2.5 bg-white border border-charcoal/10 rounded-full text-charcoal/80 text-sm font-medium cursor-pointer transition-colors duration-200"
                >
                  {market}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
