"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const particles = [
  { size: 3, left: 10, top: 15, duration: 3.4, delay: 0.5 },
  { size: 4, left: 72, top: 22, duration: 4.2, delay: 1.3 },
  { size: 2, left: 25, top: 68, duration: 3.8, delay: 0.8 },
  { size: 5, left: 88, top: 42, duration: 4.5, delay: 1.9 },
  { size: 3, left: 45, top: 28, duration: 3.2, delay: 0.3 },
  { size: 4, left: 58, top: 78, duration: 4.0, delay: 1.6 },
  { size: 2, left: 15, top: 52, duration: 3.6, delay: 1.1 },
  { size: 5, left: 92, top: 35, duration: 4.3, delay: 0.2 },
  { size: 3, left: 35, top: 85, duration: 3.5, delay: 1.7 },
  { size: 4, left: 68, top: 55, duration: 4.1, delay: 0.9 },
  { size: 2, left: 82, top: 18, duration: 3.9, delay: 1.4 },
  { size: 5, left: 28, top: 38, duration: 4.4, delay: 0.6 },
  { size: 3, left: 55, top: 92, duration: 3.3, delay: 1.2 },
  { size: 4, left: 78, top: 65, duration: 4.2, delay: 0.4 },
]

export function ContactCTA() {
  return (
    <section className="relative py-16 md:py-20 bg-[#C5A065] text-white overflow-hidden">
      {/* Floating Gold / White Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20 z-0"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.15, 0.5, 0.15],
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
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4 font-[var(--font-heading)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Make Your Next Property Decision With Confidence
          </motion.h2>

          <motion.p
            className="text-white/90 mb-8 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Connect with Terrixa Realty for insight-driven real estate advisory across land,
            residential, and commercial assets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="https://wa.me/919090363607" target="_blank" rel="noopener noreferrer">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="relative bg-charcoal text-white hover:bg-charcoal/90 rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300 hover:shadow-lg overflow-hidden"
                >
                  {/* Shimmer sweep */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 z-0"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                  <span className="relative z-10">Speak to a Terrixa Advisor</span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
