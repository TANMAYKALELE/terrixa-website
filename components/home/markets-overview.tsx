"use client"

import { motion } from "framer-motion"
import { Mountain, Building2 } from "lucide-react"
import Link from "next/link"

const lifestyleMarkets = ["Karjat", "Lonavala", "Khandala", "Kamshet", "Pawna"]
const commercialHubs = ["Pune", "Wakad", "Hinjewadi", "Ravet", "Talegaon"]

export function MarketsOverview() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-3 font-[var(--font-heading)]">
            Markets We Operate In
          </h2>
          <p className="text-lg text-charcoal/70">
            Pune & Strategic Growth Corridors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-off-white border border-charcoal/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <Mountain className="h-5 w-5 text-gold" />
              </div>
              <h3 className="font-bold text-charcoal font-[var(--font-heading)]">
                Lifestyle & Land Investment Regions
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {lifestyleMarkets.map((market, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-gold/5 border border-gold/20 rounded-full text-charcoal/80 text-sm font-medium"
                >
                  {market}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-off-white border border-charcoal/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-gold" />
              </div>
              <h3 className="font-bold text-charcoal font-[var(--font-heading)]">
                Residential & Commercial Hubs
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {commercialHubs.map((market, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-gold/5 border border-gold/20 rounded-full text-charcoal/80 text-sm font-medium"
                >
                  {market}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-charcoal/70 max-w-3xl mx-auto mb-8"
        >
          Each market is evaluated based on <strong className="text-charcoal">infrastructure growth, connectivity, employment drivers, and long-term appreciation potential</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/markets"
            className="inline-flex items-center gap-2 text-gold font-semibold hover:underline transition-all"
          >
            Explore All Markets
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
