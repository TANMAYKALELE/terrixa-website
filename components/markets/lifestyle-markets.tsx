"use client"

import { motion } from "framer-motion"
import { Mountain } from "lucide-react"
import { staggerContainer, scaleIn } from "@/lib/motion"

const locations = [
  {
    name: "Karjat",
    description:
      "Karjat has emerged as a preferred destination for land investment and second homes, supported by rail connectivity, upcoming infrastructure, and natural surroundings. We advise on clear-title land parcels, plotted developments, and long-term investment opportunities.",
    image:
      "https://images.pexels.com/photos/4321802/pexels-photo-4321802.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Land Investment",
  },
  {
    name: "Lonavala",
    description:
      "Lonavala continues to attract premium lifestyle buyers and investors due to its proximity to Mumbai and Pune, scenic environment, and established demand for villas and plotted developments.",
    image:
      "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Second Home",
  },
  {
    name: "Khandala",
    description:
      "Khandala offers limited supply and strong demand, making it suitable for high-value land acquisitions and boutique developments. Our advisory focuses on regulatory clarity and investment feasibility.",
    image:
      "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Second Home",
  },
  {
    name: "Kamshet",
    description:
      "Kamshet is gaining attention for early-stage land investments and low-density developments. We assist investors in identifying future-ready land parcels with appreciation potential.",
    image: "/kamshet.jpeg",
    badge: "Land Investment",
  },
  {
    name: "Pawna",
    description:
      "Pawna is a growing lifestyle market driven by tourism and second-home demand. Terrixa Realty advises on strategic land acquisitions and investment-grade plots in this region.",
    image: "/Pawna.jpg",
    badge: "Second Home",
  },
]

export function LifestyleMarkets() {
  return (
    <section className="py-16 md:py-24 bg-[#111111]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Mountain className="h-5 w-5 text-[#C5A065]" />
            <span className="text-[#C5A065] font-semibold text-sm tracking-wider uppercase">
              SECTION A
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-[var(--font-heading)]">
            Lifestyle & Land Investment Markets
          </h2>
          <p className="text-lg text-white/60">
            High-Potential Land & Lifestyle Destinations
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/60 text-center mb-12 max-w-3xl mx-auto"
        >
          These markets are known for{" "}
          <strong className="text-white">
            second homes, plotted developments, and long-term land investments
          </strong>{" "}
          driven by lifestyle demand and improving connectivity.
        </motion.p>

        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              transition={{ duration: 0.4 }}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer w-full md:w-[calc(50%-12px)]"
            >
              {/* Image with zoom on hover */}
              <img
                src={location.image}
                alt={location.name}
                loading={index < 2 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Category badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#C5A065]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide uppercase">
                  {location.badge}
                </span>
              </div>

              {/* Frosted glass overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-white/5 backdrop-blur-sm border-t border-white/10">
                <h3 className="text-xl font-bold text-white mb-2 font-[var(--font-heading)]">
                  {location.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                  {location.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
