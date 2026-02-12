"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function AboutCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#C5A065] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-[150px]" />
      </div>

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${8 + Math.random() * 84}%`,
            top: `${8 + Math.random() * 84}%`,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.1, 0.45, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
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
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 font-[var(--font-heading)]">
              Build Your Property Strategy With Confidence
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you are planning a land acquisition, residential investment, or commercial lease, our advisory team is ready to guide you.
            </p>
          </motion.div>

          {/* CTA Button with shimmer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
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
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <span className="relative">Consult a Terrixa Advisor</span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
