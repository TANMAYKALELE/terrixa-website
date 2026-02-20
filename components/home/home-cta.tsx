"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function HomeCTA() {
  return (
    <section className="py-24 md:py-32 bg-[#C5A065] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-[150px]" />
      </div>

      {[
        { left: 20, top: 25, duration: 3.5, delay: 0.3 },
        { left: 75, top: 20, duration: 4.2, delay: 1.4 },
        { left: 35, top: 70, duration: 3.8, delay: 0.7 },
        { left: 85, top: 55, duration: 4.0, delay: 2.0 },
        { left: 50, top: 35, duration: 3.3, delay: 1.1 },
        { left: 65, top: 80, duration: 4.4, delay: 2.5 },
        { left: 25, top: 50, duration: 3.6, delay: 0.5 },
        { left: 80, top: 40, duration: 4.1, delay: 1.8 },
      ].map((particle, i) => (
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[var(--font-heading)]">
              Invest in Land & Property With Confidence
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              Whether you&apos;re evaluating land, plotting, residential purchases, or commercial leases, Terrixa Realty brings the clarity and discipline required to move forward with certainty.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Button
                  size="lg"
                  className="bg-charcoal text-white hover:bg-charcoal/90 rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <span className="relative">Speak With a Terrixa Advisor</span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 pt-8 border-t border-white/20"
          >
            <p className="text-white/80 font-medium">
              Terrixa Realty — Land & Property Advisory for Smarter Decisions
            </p>
            <p className="text-white/60 text-sm mt-1">
              Serving Pune and Emerging Growth Markets
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
