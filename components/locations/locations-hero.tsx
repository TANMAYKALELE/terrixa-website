"use client"

import { motion } from "framer-motion"

export function LocationsHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#1a1a1a]/95">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,101,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <div className="bg-gradient-to-r from-[#C5A065]/20 to-[#E5C085]/20 border border-[#C5A065] px-6 py-2 rounded-full">
              <span className="text-[#E5C085] font-semibold text-sm tracking-wider uppercase">PRIME LOCATIONS</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 font-[var(--font-heading)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C5A065] via-[#E5C085] to-[#C5A065]">
              Real Estate Expertise
            </span>{" "}
            Across Pune & High-Growth Corridors
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/80 text-xl md:text-2xl mb-6 max-w-3xl mx-auto leading-relaxed"
          >
            Terrixa Realty operates across <strong>Pune and its rapidly developing peripheral markets</strong>, offering advisory services in <strong>land broking, residential sales, and commercial leasing</strong>. Each market we serve is carefully evaluated based on <strong>infrastructure growth, demand drivers, livability, and long-term appreciation potential</strong>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/80 text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Our presence across these locations allows us to provide <strong>hyper-local insight combined with strategic advisory</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="bg-[#7A9B76]/20 border border-[#7A9B76] px-6 py-2 rounded-full">
                <span className="text-[#7A9B76] font-semibold">Karjat</span>
              </div>
              <div className="bg-[#C5A065]/20 border border-[#C5A065] px-6 py-2 rounded-full">
                <span className="text-[#E5C085] font-semibold">Lonavala</span>
              </div>
              <div className="bg-[#C5A065]/20 border border-[#C5A065] px-6 py-2 rounded-full">
                <span className="text-[#E5C085] font-semibold">Khandala</span>
              </div>
              <div className="bg-[#7A9B76]/20 border border-[#7A9B76] px-6 py-2 rounded-full">
                <span className="text-[#7A9B76] font-semibold">Kamshet</span>
              </div>
              <div className="bg-[#C5A065]/20 border border-[#C5A065] px-6 py-2 rounded-full">
                <span className="text-[#E5C085] font-semibold">Pawna</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="bg-[#C5A065]/20 border border-[#C5A065] px-6 py-2 rounded-full">
                <span className="text-[#E5C085] font-semibold">Pune</span>
              </div>
              <div className="bg-[#7A9B76]/20 border border-[#7A9B76] px-6 py-2 rounded-full">
                <span className="text-[#7A9B76] font-semibold">Hinjewadi</span>
              </div>
              <div className="bg-[#C5A065]/20 border border-[#C5A065] px-6 py-2 rounded-full">
                <span className="text-[#E5C085] font-semibold">Wakad</span>
              </div>
              <div className="bg-[#7A9B76]/20 border border-[#7A9B76] px-6 py-2 rounded-full">
                <span className="text-[#7A9B76] font-semibold">Ravet</span>
              </div>
              <div className="bg-[#C5A065]/20 border border-[#C5A065] px-6 py-2 rounded-full">
                <span className="text-[#E5C085] font-semibold">Talegaon</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
