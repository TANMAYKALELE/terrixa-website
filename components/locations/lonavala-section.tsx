"use client"

import { motion } from "framer-motion"
import { TrendingUp, IndianRupee, MapPin, Home, Check } from "lucide-react"

export function LonavalaSection() {
  const stats = [
    { icon: TrendingUp, value: "10-15%", label: "Stable Annual Returns" },
    { icon: IndianRupee, value: "₹30L+", label: "Premium Positioning" },
    { icon: MapPin, value: "83 km", label: "Distance from Pune" },
    { icon: Home, value: "50+ Plots", label: "Available Inventory" },
  ]

  const highlights = [
    "Established tourist destination",
    "Strong rental income potential",
    "Gated community developments",
    "Natural scenic beauty",
  ]

  return (
    <section id="lonavala" className="py-20 md:py-28 bg-[#7A9B76]/5 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(197,160,101,0.15) 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Orb */}
      <motion.div
        className="absolute bottom-20 -right-40 w-96 h-96 bg-[#C5A065]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="bg-[#C5A065]/20 border border-[#C5A065] px-6 py-2 rounded-full">
                <span className="text-[#C5A065] font-semibold text-sm tracking-wider uppercase">LONAVALA</span>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 font-[var(--font-heading)]">
              Lonavala
            </h2>

            <p className="text-[#1a1a1a]/70 text-lg mb-8 leading-relaxed">
              Lonavala continues to attract <strong>premium lifestyle buyers and investors</strong> due to its proximity to Mumbai and Pune, scenic environment, and established demand for villas and plotted developments.
            </p>

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
                    className="bg-white border border-[#C5A065]/20 rounded-xl p-4 hover:border-[#C5A065]/40 transition-all duration-300 hover:shadow-lg group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-[#C5A065] mb-2 group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <div className="text-2xl font-bold text-[#C5A065] mb-1 font-[var(--font-heading)]">{stat.value}</div>
                    <div className="text-xs text-[#1a1a1a]/60 leading-tight">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>

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
                    <Check className="w-5 h-5 text-[#C5A065] flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <span className="text-[#1a1a1a]/80 group-hover:text-[#1a1a1a] transition-colors">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group order-1 lg:order-2"
          >
            <motion.div
              className="rounded-2xl overflow-hidden relative h-[500px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg"
                alt="Lonavala hills"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#C5A065]/60 to-transparent" />

              <motion.div
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-[#C5A065] font-bold text-lg">Premium Location</span>
              </motion.div>

              <motion.div
                className="absolute bottom-6 left-6 w-24 h-24 border-4 border-white/40 rounded-2xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
