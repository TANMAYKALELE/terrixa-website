"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

const headline = "Land & Property Advisory Built on Clarity"
const headlineWords = headline.split(" ")

const locations = "Karjat | Lonavala | Khandala | Kamshet | Talegaon | Ravet | Hinjewadi | Wakad | Pune | Pawna"
const marqueeText = `${locations}  •  ${locations}  •  ${locations} • ${locations}`

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[700px] md:min-h-[800px] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://res.cloudinary.com/dgd2wf7c3/video/upload/v1/hero_grn3vw.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dgd2wf7c3/video/upload/q_auto,f_auto/hero_grn3vw.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      </div>

      {[
        { left: 15, top: 20, duration: 3.5, delay: 0.2 },
        { left: 75, top: 15, duration: 4.2, delay: 1.5 },
        { left: 25, top: 70, duration: 3.8, delay: 0.8 },
        { left: 85, top: 45, duration: 4.5, delay: 2.1 },
        { left: 45, top: 30, duration: 3.2, delay: 0.5 },
        { left: 60, top: 80, duration: 4.0, delay: 1.8 },
        { left: 35, top: 55, duration: 3.6, delay: 2.5 },
        { left: 90, top: 25, duration: 4.3, delay: 0.3 },
        { left: 20, top: 85, duration: 3.9, delay: 1.2 },
        { left: 70, top: 60, duration: 4.1, delay: 2.8 },
        { left: 50, top: 40, duration: 3.4, delay: 0.9 },
        { left: 80, top: 75, duration: 4.4, delay: 1.6 },
        { left: 30, top: 35, duration: 3.7, delay: 2.3 },
        { left: 65, top: 50, duration: 4.0, delay: 0.6 },
        { left: 40, top: 65, duration: 3.3, delay: 1.9 },
      ].map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#C5A065] rounded-full z-[5]"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

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
                  marginRight: index < headlineWords.length - 1 ? "0.35em" : "0",
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
          className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl drop-shadow-md"
        >
          Strategic Land, Residential & Commercial Advisory Across Pune & Growth Corridors
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="text-white/80 mb-8 max-w-2xl space-y-3 text-base md:text-lg drop-shadow-md"
        >
          <p>
            Terrixa Realty is a <strong>research-driven real estate advisory firm</strong> specializing in <strong>land broking, plotting, residential sales, and commercial leasing</strong> across Pune and its high-growth regions.
          </p>
          <p>
            We work with investors, landowners, developers, and end-users who value <strong>clarity over hype, data over speculation, and long-term value over short-term deals</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                <span className="relative">Book a Consultation</span>
              </Button>
            </motion.div>
          </Link>
          <Link href="/markets">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-black/40 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-black hover:border-white rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300"
              >
                Explore Opportunities
              </Button>
            </motion.div>
          </Link>
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
            style={{ willChange: 'transform' }}
          >
            {marqueeText}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
