"use client"

import { motion } from "framer-motion"
import { TrendingUp, Shield, Coins } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Asset Appreciation",
    description:
      "Land in strategic locations consistently appreciates over time. Lock in today's prices for tomorrow's growth.",
    gradient: "from-gold/20 to-gold/5",
  },
  {
    icon: Shield,
    title: "Generational Wealth",
    description:
      "Create lasting legacy assets. Transfer clean-titled property to future generations with zero legal complications.",
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Coins,
    title: "Passive Income",
    description:
      "Lease for agriculture, rent for events, or hold for appreciation. Multiple revenue streams from a single asset.",
    gradient: "from-green-500/20 to-green-500/5",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
}

export function WhyPlotting() {
  return (
    <section className="py-20 md:py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-[var(--font-heading)]">
            Why Strategic Plotting?
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            More than land. A complete wealth-building strategy.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={cardVariants} className="group">
              <div
                className={`relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="mb-6 inline-block">
                    <div className="p-4 bg-gold/20 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                      <benefit.icon className="h-8 w-8 text-gold" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 font-[var(--font-heading)] group-hover:text-gold transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
