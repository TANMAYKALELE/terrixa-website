"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Calendar } from "lucide-react"

export function PlottingHero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a1a1a]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          // Safety Image while video loads
          poster="https://images.pexels.com/photos/14614488/pexels-photo-14614488.jpeg"
        >
          {/* 👇 OPTIMIZED LINK: 'q_auto,f_auto' for smoother playback */}
          <source 
            src="https://res.cloudinary.com/dgd2wf7c3/video/upload/q_auto,f_auto/plotting_vaw9lx.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-[#C5A065]/20 to-[#E5C085]/20 border border-[#C5A065] px-6 py-2 rounded-full">
                <span className="text-[#E5C085] font-semibold text-sm tracking-wider uppercase">
                  RERA Approved Projects
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-[var(--font-heading)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C5A065] via-[#E5C085] to-[#C5A065]">
                Premium Plotted
              </span>
              <br />
              <span className="text-white">Developments</span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-white/90 text-xl md:text-2xl mb-10 max-w-3xl leading-relaxed"
          >
            Invest in strategically located plots across Pune & satellite cities.
            Clear titles, approved layouts, and ready-to-build infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button
              size="lg"
              onClick={() => alert('Brochure downloading...')}
              className="bg-gradient-to-r from-[#C5A065] to-[#E5C085] hover:from-[#B59055] hover:to-[#D5B075] text-white rounded-full px-10 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download Layout
            </Button>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white/10 border-2 border-white/30 text-white backdrop-blur-md hover:bg-white hover:text-black rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300 group"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Visit
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl"
          >
            {[
              { value: "12+", label: "Active Projects" },
              { value: "100%", label: "Clear Titles" },
              { value: "₹12L+", label: "Starting From" },
              { value: "200+", label: "Happy Investors" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C5A065] to-[#E5C085] mb-2 font-[var(--font-heading)]">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-sm">Explore Projects</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}