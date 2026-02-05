"use client"

import { motion } from "framer-motion"
import { TrendingUp, IndianRupee, MapPin, Maximize, Check } from "lucide-react"

export function KarjatSection() {
  const stats = [
    { icon: TrendingUp, value: "18-22%", label: "Projected Annual Appreciation" },
    { icon: IndianRupee, value: "₹12-20L", label: "Entry Investment Range" },
    { icon: MapPin, value: "65 km", label: "Distance from Mumbai" },
    { icon: Maximize, value: "50+ Acres", label: "Development Potential" },
  ]

  const highlights = [
    "Emerging infrastructure hub",
    "Mumbai-Pune Expressway connectivity",
    "Growing weekend home market",
    "Agricultural land conversion zones",
  ]

  return (
    <section id="karjat" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 -left-40 w-96 h-96 bg-[#7A9B76]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <motion.div
              className="rounded-2xl overflow-hidden relative h-[500px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
                alt="Karjat landscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7A9B76]/60 to-transparent" />

              {/* Floating Badge */}
              <motion.div
                className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-[#7A9B76] font-bold text-lg">High Growth Zone</span>
              </motion.div>

              {/* Decorative Corner */}
              <motion.div
                className="absolute bottom-6 right-6 w-24 h-24 border-4 border-white/40 rounded-2xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
              />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="bg-[#7A9B76]/20 border border-[#7A9B76] px-6 py-2 rounded-full">
                <span className="text-[#7A9B76] font-semibold text-sm tracking-wider uppercase">KARJAT</span>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 font-[var(--font-heading)]">
              Karjat
            </h2>
            <p className="text-[#1a1a1a]/70 text-lg mb-8 leading-relaxed">
              Karjat has emerged as a preferred destination for <strong>land investment and second homes</strong>, supported by rail connectivity, upcoming infrastructure, and natural surroundings. We advise on <strong>clear-title land parcels, plotted developments, and long-term investment opportunities</strong>.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-[#7A9B76]/5 border border-[#7A9B76]/20 rounded-xl p-4 hover:border-[#7A9B76]/40 transition-all duration-300 hover:shadow-lg group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-[#7A9B76] mb-2 group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <div className="text-2xl font-bold text-[#7A9B76] mb-1 font-[var(--font-heading)]">{stat.value}</div>
                    <div className="text-xs text-[#1a1a1a]/60 leading-tight">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Check className="w-5 h-5 text-[#7A9B76] flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <span className="text-[#1a1a1a]/80 group-hover:text-[#1a1a1a] transition-colors">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
