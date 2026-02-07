"use client"

import { motion } from "framer-motion"

const lifestyleMarkets = ["Karjat", "Lonavala", "Khandala", "Kamshet", "Pawna"]
const urbanMarkets = ["Pune", "Hinjewadi", "Wakad", "Ravet", "Talegaon"]

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto text-center space-y-3"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {lifestyleMarkets.map((market, i) => (
              <span key={i} className="px-4 py-2 bg-white border border-charcoal/10 rounded-full text-charcoal/80 text-sm font-medium hover:border-gold/30 hover:text-gold transition-all">
                {market}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {urbanMarkets.map((market, i) => (
              <span key={i} className="px-4 py-2 bg-white border border-charcoal/10 rounded-full text-charcoal/80 text-sm font-medium hover:border-gold/30 hover:text-gold transition-all">
                {market}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
