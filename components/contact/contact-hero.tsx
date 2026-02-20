"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Sparkles } from "lucide-react"

const particles = [
  { left: 5, top: 10, duration: 3.3, delay: 0.2 },
  { left: 70, top: 15, duration: 4.2, delay: 1.5 },
  { left: 20, top: 62, duration: 3.7, delay: 0.6 },
  { left: 85, top: 40, duration: 4.4, delay: 1.8 },
  { left: 42, top: 25, duration: 3.1, delay: 0.4 },
  { left: 55, top: 72, duration: 4.0, delay: 1.3 },
  { left: 12, top: 48, duration: 3.5, delay: 0.9 },
  { left: 90, top: 30, duration: 4.3, delay: 0.1 },
  { left: 32, top: 80, duration: 3.8, delay: 1.7 },
  { left: 65, top: 52, duration: 4.1, delay: 0.8 },
  { left: 78, top: 65, duration: 3.4, delay: 1.2 },
  { left: 25, top: 32, duration: 4.5, delay: 0.5 },
  { left: 52, top: 88, duration: 3.6, delay: 1.6 },
  { left: 92, top: 18, duration: 4.0, delay: 0.3 },
  { left: 8, top: 75, duration: 3.9, delay: 1.1 },
  { left: 75, top: 85, duration: 4.2, delay: 0.7 },
  { left: 38, top: 20, duration: 3.2, delay: 1.4 },
  { left: 62, top: 42, duration: 4.4, delay: 0.2 },
]

export function ContactHero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#1a1a1a]"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y: bgY, scale: bgScale, willChange: "transform" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-[#1a1a1a]/85 to-[#1a1a1a] z-10" />
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Luxury corporate architecture"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTk3LDE2MCwxMDEsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] z-[5] opacity-40" />

      {/* Floating Gold Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#C5A065] rounded-full z-[6]"
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

      {/* Radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,101,0.08),transparent_50%)] z-[5]" />

      <div className="container mx-auto px-4 relative z-20 pt-32 pb-16">
        <motion.div style={{ opacity: contentOpacity }} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mb-8"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(197,160,101,0.3)",
                  "0 0 40px rgba(197,160,101,0.5)",
                  "0 0 20px rgba(197,160,101,0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-gradient-to-r from-[#C5A065]/20 to-[#E5C085]/20 border border-[#C5A065] px-6 py-2 rounded-full backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E5C085]" />
                <span className="text-[#E5C085] font-semibold text-sm tracking-wider uppercase">
                  CONTACT US
                </span>
                <Sparkles className="w-4 h-4 text-[#E5C085]" />
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 font-[var(--font-heading)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let&apos;s Discuss Your{" "}
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
            Whether you are planning a{" "}
            <strong className="text-white">
              land investment, residential purchase, or commercial lease
            </strong>
            , Terrixa Realty offers{" "}
            <strong className="text-white">
              strategic advisory backed by market intelligence and local expertise
            </strong>
            . Share your requirements and our team will connect with you for a focused consultation.
          </motion.p>

          <motion.p
            className="text-white/60 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            At Terrixa Realty, we believe every property decision should begin with clarity. Our
            consultation process is designed to understand{" "}
            <strong className="text-white/80">
              your objectives, timeline, and risk profile
            </strong>
            , allowing us to recommend{" "}
            <strong className="text-white/80">
              suitable locations, asset types, and strategies
            </strong>
            .
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
