"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowDown, Sparkles } from "lucide-react"
import { useRef } from "react"

const particles = [
  { left: 8, top: 12, duration: 3.2, delay: 0.3 },
  { left: 72, top: 18, duration: 4.1, delay: 1.4 },
  { left: 22, top: 65, duration: 3.6, delay: 0.7 },
  { left: 88, top: 42, duration: 4.5, delay: 1.9 },
  { left: 45, top: 28, duration: 3.3, delay: 0.5 },
  { left: 58, top: 75, duration: 4.0, delay: 1.6 },
  { left: 15, top: 48, duration: 3.8, delay: 1.1 },
  { left: 92, top: 32, duration: 4.3, delay: 0.2 },
  { left: 35, top: 82, duration: 3.5, delay: 1.8 },
  { left: 68, top: 55, duration: 4.2, delay: 0.9 },
  { left: 82, top: 68, duration: 3.4, delay: 1.3 },
  { left: 28, top: 35, duration: 4.4, delay: 0.6 },
  { left: 55, top: 92, duration: 3.7, delay: 1.7 },
  { left: 95, top: 15, duration: 4.1, delay: 0.4 },
  { left: 12, top: 78, duration: 3.9, delay: 1.2 },
  { left: 78, top: 88, duration: 4.0, delay: 0.8 },
  { left: 42, top: 22, duration: 3.6, delay: 1.5 },
  { left: 65, top: 45, duration: 4.2, delay: 0.1 },
  { left: 18, top: 58, duration: 3.3, delay: 1.0 },
  { left: 85, top: 25, duration: 4.4, delay: 0.7 },
]

export function AboutHero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#1a1a1a]">
      {/* Parallax Background Image */}
      <motion.div
        style={{ y, scale, willChange: "transform" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/60 via-[#1a1a1a]/80 to-[#1a1a1a] z-10" />
        <img
          src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
          alt="Aerial view of land"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTk3LDE2MCwxMDEsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] z-10 opacity-40" />

      {/* Floating Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#C5A065] rounded-full z-10"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-20 pt-32 pb-20">
        <motion.div
          style={{ opacity }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(197,160,101,0.3)",
                    "0 0 40px rgba(197,160,101,0.5)",
                    "0 0 20px rgba(197,160,101,0.3)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-gradient-to-r from-[#C5A065]/20 to-[#E5C085]/20 border border-[#C5A065] px-6 py-2 rounded-full backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E5C085]" />
                  <span className="text-[#E5C085] font-semibold text-sm tracking-wider uppercase">WHO WE ARE</span>
                  <Sparkles className="w-4 h-4 text-[#E5C085]" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] mb-8 font-[var(--font-heading)]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            A Research-Led Real Estate Advisory Firm
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl mb-10 max-w-4xl mx-auto leading-relaxed space-y-4"
          >
            <p>
              Terrixa Realty is a <strong>strategic real estate advisory and broking firm</strong> operating across <strong>Pune and its emerging growth corridors</strong>. We specialize in <strong>land broking, residential advisory, and commercial leasing</strong>, supported by <strong>research, valuation, and market intelligence</strong>.
            </p>
            <p>
              Unlike conventional brokers, we approach every transaction as a <strong>capital decision</strong> — balancing location fundamentals, pricing, regulatory clarity, and future potential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/about#contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#C5A065] to-[#E5C085] hover:from-[#B59055] hover:to-[#D5B075] text-white rounded-full px-10 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative">Schedule Consultation</span>
                </Button>
              </motion.div>
            </Link>
            <Link href="/plotting">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-white/10 border-2 border-white/30 text-white backdrop-blur-md hover:bg-white hover:text-black rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300"
                >
                  View Projects
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60 cursor-pointer"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
