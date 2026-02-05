"use client"

import { motion } from "framer-motion"
import { MapPin, Building2, Trees, TrendingUp } from "lucide-react"

const lifestyleLocations = [
  { name: "Karjat", highlight: "Emerging growth hub" },
  { name: "Lonavala", highlight: "Premium vacation homes" },
  { name: "Khandala", highlight: "Scenic hillside living" },
  { name: "Kamshet", highlight: "Adventure tourism potential" },
  { name: "Pawna", highlight: "Lakefront opportunities" },
]

const urbanLocations = [
  { name: "Pune", highlight: "Commercial core" },
  { name: "Wakad", highlight: "IT sector growth" },
  { name: "Hinjewadi", highlight: "Tech park ecosystem" },
  { name: "Ravet", highlight: "Emerging office zones" },
  { name: "Talegaon", highlight: "Industrial corridor" },
]

export function LocationSplitSections() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#7A9B76]/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 font-[var(--font-heading)]">
            Our Location Strategy
          </h2>
          <p className="text-[#1a1a1a]/70 text-lg max-w-3xl mx-auto">
            Two distinct portfolios. One unified approach: research-led advisory for informed investment.
          </p>
        </motion.div>

        {/* Section A: Lifestyle & Land Markets */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#7A9B76]/10 to-[#7A9B76]/5 border-2 border-[#7A9B76]/20 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#7A9B76]/20 rounded-2xl">
                  <Trees className="h-8 w-8 text-[#7A9B76]" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] font-[var(--font-heading)]">
                    Lifestyle & Land Markets
                  </h3>
                  <p className="text-[#1a1a1a]/60 text-sm mt-1">Section A</p>
                </div>
              </div>

              <p className="text-[#1a1a1a]/80 text-lg mb-8 leading-relaxed">
                Strategic plotting opportunities focused on <strong>second homes, nature-based living, and long-term land appreciation</strong>.
                These locations offer escape from urban density while maintaining connectivity to major metros. Ideal for investors seeking
                legacy assets and lifestyle upgrades.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {lifestyleLocations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="bg-white border border-[#7A9B76]/20 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-[#7A9B76]/40"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <MapPin className="h-5 w-5 text-[#7A9B76] flex-shrink-0 mt-0.5" />
                      <h4 className="font-bold text-[#1a1a1a] text-lg">{location.name}</h4>
                    </div>
                    <p className="text-[#1a1a1a]/60 text-sm">{location.highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section B: Urban & Commercial Hubs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#C5A065]/10 to-[#C5A065]/5 border-2 border-[#C5A065]/20 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#C5A065]/20 rounded-2xl">
                  <Building2 className="h-8 w-8 text-[#C5A065]" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] font-[var(--font-heading)]">
                    Urban & Commercial Hubs
                  </h3>
                  <p className="text-[#1a1a1a]/60 text-sm mt-1">Section B</p>
                </div>
              </div>

              <p className="text-[#1a1a1a]/80 text-lg mb-8 leading-relaxed">
                High-yield investment zones driven by <strong>employment centers, IT parks, and commercial leasing demand</strong>.
                These locations cater to corporate tenants, residential rental markets, and businesses seeking strategic office space.
                Perfect for investors focused on income generation and capital stability.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {urbanLocations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="bg-white border border-[#C5A065]/20 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-[#C5A065]/40"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <Building2 className="h-5 w-5 text-[#C5A065] flex-shrink-0 mt-0.5" />
                      <h4 className="font-bold text-[#1a1a1a] text-lg">{location.name}</h4>
                    </div>
                    <p className="text-[#1a1a1a]/60 text-sm">{location.highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a]/5 px-6 py-3 rounded-full">
            <TrendingUp className="h-5 w-5 text-[#C5A065]" />
            <p className="text-[#1a1a1a]/80 font-medium">
              All locations backed by market research and feasibility analysis
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
