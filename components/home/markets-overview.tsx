"use client"

import { motion } from "framer-motion"
import { Mountain, Building2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const lifestyleMarkets = ["Karjat", "Lonavala", "Khandala", "Kamshet", "Pawna"]
const commercialHubs = ["Pune", "Wakad", "Hinjewadi", "Ravet", "Talegaon"]

export function MarketsOverview() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-gradient-to-r from-[#C5A065] to-[#E5C085] rounded-full mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-3 font-[var(--font-heading)]">
            Markets We Operate In
          </h2>
          <p className="text-lg text-charcoal/70">
            Pune & Strategic Growth Corridors
          </p>
        </motion.div>

        <div className="flex md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="relative rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0 w-[85vw] md:w-auto snap-center"
          >
            <img
              src="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Lifestyle Markets"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#C5A065]/20 backdrop-blur-sm flex items-center justify-center">
                  <Mountain className="h-5 w-5 text-[#C5A065]" />
                </div>
                <h3 className="font-bold text-white text-lg font-[var(--font-heading)]">
                  Lifestyle & Land Investment
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {lifestyleMarkets.map((market, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                    className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium"
                  >
                    {market}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="relative rounded-2xl overflow-hidden group cursor-pointer flex-shrink-0 w-[85vw] md:w-auto snap-center"
          >
            <img
              src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Urban Hubs"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#C5A065]/20 backdrop-blur-sm flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-[#C5A065]" />
                </div>
                <h3 className="font-bold text-white text-lg font-[var(--font-heading)]">
                  Residential & Commercial Hubs
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {commercialHubs.map((market, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                    className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium"
                  >
                    {market}
                  </motion.span>
                ))}
              </div>
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
          <Link href="/markets">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button className="bg-transparent border-2 border-[#C5A065] text-[#C5A065] hover:bg-[#C5A065] hover:text-white rounded-full px-8 py-5 font-semibold transition-all duration-300">
                Explore All Markets
                <span className="ml-2" aria-hidden="true">&rarr;</span>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
