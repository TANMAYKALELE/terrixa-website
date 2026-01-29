"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const headline = "Land & Property Advisory Built on Clarity"
const headlineWords = headline.split(" ")

const locations = "Karjat • Lonavala • Khandala • Kamshet • Talegaon • Ravet • Hinjewadi • Wakad • Pune • Pawna"
const marqueeText = `${locations}  •  ${locations}  •  ${locations} • ${locations}`

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[700px] md:min-h-[800px] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">

      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          // 👇 POSTER: This image loads instantly so the screen is never black
          poster="https://res.cloudinary.com/dgd2wf7c3/video/upload/v1/hero_grn3vw.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* 👇 OPTIMIZED LINK: 'q_auto,f_auto' reduces lag significantly */}
          <source 
            src="https://res.cloudinary.com/dgd2wf7c3/video/upload/q_auto,f_auto/hero_grn3vw.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center min-h-[700px] md:min-h-[800px] pb-24">

        <div className="mb-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-[var(--font-heading)]">
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.3 + index * 0.1,
                }}
                style={{
                  display: "inline-block",
                  transformPerspective: "1000px",
                  marginRight: index < headlineWords.length - 1 ? "0.35em" : "0"
                }}
                className="origin-bottom"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl drop-shadow-md"
        >
          Strategic Land, Residential & Commercial Advisory Across Pune & Growth Corridors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-transparent border-2 border-[#C5A065] text-white hover:bg-[#C5A065] hover:text-white rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300"
          >
            Book a Consultation
          </Button>
          <Button
            size="lg"
            className="bg-black/40 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-black hover:border-white rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300"
          >
            Explore Opportunities
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.0 }}
        className="absolute bottom-0 left-0 right-0 z-20 w-full h-16 border-t border-white/10 bg-black/40 backdrop-blur-md overflow-hidden"
      >
        <div className="flex items-center h-full">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap text-sm font-semibold text-white/80 tracking-widest uppercase gap-8"
          >
            {marqueeText}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}