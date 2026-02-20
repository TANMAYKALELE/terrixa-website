"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

const particles = [
  { left: 15, top: 18, duration: 3.3, delay: 0.5 },
  { left: 78, top: 25, duration: 4.2, delay: 1.8 },
  { left: 32, top: 72, duration: 3.7, delay: 0.9 },
  { left: 85, top: 48, duration: 4.0, delay: 2.4 },
  { left: 52, top: 35, duration: 3.5, delay: 1.2 },
  { left: 68, top: 82, duration: 4.4, delay: 2.8 },
  { left: 22, top: 55, duration: 3.2, delay: 0.3 },
  { left: 88, top: 42, duration: 4.1, delay: 1.5 },
  { left: 42, top: 88, duration: 3.8, delay: 2.1 },
  { left: 75, top: 62, duration: 4.3, delay: 0.7 },
]

export function MarketsCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#C5A065] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-[150px]" />
      </div>

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[var(--font-heading)]">
              Explore the Right Market for Your Property Goals
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              Whether you are evaluating a land investment, residential purchase,
              or commercial lease, our advisors can guide you across the right
              locations.
            </p>
          </motion.div>

          {/* CTA Button with shimmer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-charcoal text-white hover:bg-charcoal/90 rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
                >
                  {/* Shimmer effect */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                  <span className="relative">
                    Speak to a Local Property Expert
                  </span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Footer tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 pt-8 border-t border-white/20"
          >
            <p className="text-white/80 font-medium">
              Terrixa Realty — Advisory Across Pune & High-Growth Real Estate
              Markets
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
