"use client"

import { motion } from "framer-motion"
import { Mountain } from "lucide-react"

const locations = [
  {
    name: "Karjat",
    description: "Karjat has emerged as a preferred destination for land investment and second homes, supported by rail connectivity, upcoming infrastructure, and natural surroundings. We advise on clear-title land parcels, plotted developments, and long-term investment opportunities.",
    image: "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Lonavala",
    description: "Lonavala continues to attract premium lifestyle buyers and investors due to its proximity to Mumbai and Pune, scenic environment, and established demand for villas and plotted developments.",
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Khandala",
    description: "Khandala offers limited supply and strong demand, making it suitable for high-value land acquisitions and boutique developments. Our advisory focuses on regulatory clarity and investment feasibility.",
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Kamshet",
    description: "Kamshet is gaining attention for early-stage land investments and low-density developments. We assist investors in identifying future-ready land parcels with appreciation potential.",
    image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Pawna",
    description: "Pawna is a growing lifestyle market driven by tourism and second-home demand. Terrixa Realty advises on strategic land acquisitions and investment-grade plots in this region.",
    image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
]

export function LifestyleMarkets() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Mountain className="h-5 w-5 text-gold" />
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">SECTION A</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-3 font-[var(--font-heading)]">
            Lifestyle & Land Investment Markets
          </h2>
          <p className="text-lg text-charcoal/70">
            High-Potential Land & Lifestyle Destinations
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-charcoal/70 text-center mb-12 max-w-3xl mx-auto"
        >
          These markets are known for <strong className="text-charcoal">second homes, plotted developments, and long-term land investments</strong> driven by lifestyle demand and improving connectivity.
        </motion.p>

        <div className="max-w-5xl mx-auto space-y-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-off-white border border-charcoal/10 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <motion.img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                  />
                </div>
                <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-charcoal mb-3 font-[var(--font-heading)]">
                    {location.name}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    {location.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
