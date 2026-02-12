"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Sparkles } from "lucide-react"
import { useRef } from "react"

export function MarketsHero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#1a1a1a]"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dgd2wf7c3/video/upload/v1769513834/plotting_vaw9lx.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#C5A065] rounded-full z-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-20 pt-32 pb-20">
        <motion.div style={{ opacity }} className="max-w-5xl mx-auto text-center">
          {/* Badge */}
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
                  MARKETS WE SERVE
                </span>
                <Sparkles className="w-4 h-4 text-[#E5C085]" />
              </div>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 font-[var(--font-heading)]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Real Estate Expertise Across{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C5A065] via-[#E5C085] to-[#C5A065]">
              Pune & High-Growth Corridors
            </span>
          </motion.h1>

          {/* Description Paragraphs */}
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Terrixa Realty operates across{" "}
            <strong className="text-white">
              Pune and its rapidly developing peripheral markets
            </strong>
            , offering advisory services in{" "}
            <strong className="text-white">
              land broking, residential sales, and commercial leasing
            </strong>
            . Each market we serve is carefully evaluated based on{" "}
            <strong className="text-white">
              infrastructure growth, demand drivers, livability, and long-term
              appreciation potential
            </strong>
            .
          </motion.p>

          <motion.p
            className="text-lg text-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Our presence across these locations allows us to provide{" "}
            <strong className="text-white">
              hyper-local insight combined with strategic advisory
            </strong>
            .
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
