"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

export function LocationComparison() {
  const comparisonData = [
    { feature: "Investment Entry", karjat: "₹12-20L", lonavala: "₹30L+" },
    { feature: "Annual Appreciation", karjat: "18-22%", lonavala: "10-15%" },
    { feature: "Distance from Mumbai", karjat: "~65 km", lonavala: "~83 km" },
    { feature: "Best For", karjat: "High growth", lonavala: "Stable returns" },
    { feature: "Infrastructure", karjat: "Developing", lonavala: "Established" },
    { feature: "Rental Potential", karjat: "Moderate", lonavala: "High" },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 font-[var(--font-heading)]">
            Compare Locations
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-[#1a1a1a] to-[#1a1a1a]/95">
                  <th className="p-6 text-left text-white font-bold">Feature</th>
                  <th className="p-6 text-center text-white font-bold">Karjat</th>
                  <th className="p-6 text-center text-white font-bold">Lonavala</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="border-b border-[#1a1a1a]/10 hover:bg-[#7A9B76]/5 transition-colors"
                  >
                    <td className="p-6 font-semibold text-[#1a1a1a]">{row.feature}</td>
                    <td className="p-6 text-center">
                      <span className="inline-block bg-[#7A9B76]/10 text-[#7A9B76] px-4 py-2 rounded-lg font-medium">
                        {row.karjat}
                      </span>
                    </td>
                    <td className="p-6 text-center">
                      <span className="inline-block bg-[#C5A065]/10 text-[#C5A065] px-4 py-2 rounded-lg font-medium">
                        {row.lonavala}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#7A9B76]/10 border border-[#7A9B76]/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 font-[var(--font-heading)]">Choose Karjat If:</h3>
            <ul className="space-y-3">
              {[
                "You want maximum appreciation potential",
                "Looking for lower entry investment",
                "Comfortable with emerging markets",
                "Planning a 5-7 year investment horizon",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#7A9B76] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1a1a1a]/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#C5A065]/10 border border-[#C5A065]/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6 font-[var(--font-heading)]">Choose Lonavala If:</h3>
            <ul className="space-y-3">
              {[
                "You prioritize immediate rental income",
                "Want established infrastructure",
                "Interested in a premium vacation home",
                "Seeking stable, predictable returns",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C5A065] flex-shrink-0 mt-0.5" />
                  <span className="text-[#1a1a1a]/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
