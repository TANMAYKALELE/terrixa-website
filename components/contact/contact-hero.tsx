"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#1a1a1a]/95">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,101,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <div className="bg-gradient-to-r from-[#C5A065]/20 to-[#E5C085]/20 border border-[#C5A065] px-6 py-2 rounded-full">
              <span className="text-[#E5C085] font-semibold text-sm tracking-wider uppercase">CONTACT US</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 font-[var(--font-heading)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Discuss Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C5A065] via-[#E5C085] to-[#C5A065]">
              Property Goals
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Whether you are planning a <strong className="text-white">land investment, residential purchase, or commercial lease</strong>, Terrixa Realty offers <strong className="text-white">strategic advisory backed by market intelligence and local expertise</strong>. Share your requirements and our team will connect with you for a focused consultation.
          </motion.p>

          <motion.p
            className="text-white/60 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            At Terrixa Realty, we believe every property decision should begin with clarity. Our consultation process is designed to understand <strong className="text-white/80">your objectives, timeline, and risk profile</strong>, allowing us to recommend <strong className="text-white/80">suitable locations, asset types, and strategies</strong>.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
