"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export function LocationsCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#1a1a1a] to-[#1a1a1a]/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEuNSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-[#C5A065]/20 to-[#E5C085]/20 border border-[#C5A065] px-6 py-2 rounded-full">
              <span className="text-[#E5C085] font-semibold text-sm tracking-wider uppercase">Ready to Invest?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-[var(--font-heading)]">
            Explore the Right Market for Your Property Goals
          </h2>
          <p className="text-white/80 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Whether you are evaluating a land investment, residential purchase, or commercial lease, our advisors can guide you across the right locations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/about#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C5A065] to-[#E5C085] hover:from-[#B59055] hover:to-[#D5B075] text-white rounded-full px-10 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Speak to a Local Property Expert
              </Button>
            </Link>
            <Link href="/plotting">
              <Button
                size="lg"
                className="bg-white/10 border-2 border-white/30 text-white backdrop-blur-md hover:bg-white hover:text-black rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300"
              >
                View Available Projects
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16"
        >
          <a
            href="tel:+919930070767"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-[#C5A065] to-[#E5C085] rounded-xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white/60 text-sm mb-1">Call Us</p>
                <p className="text-white font-semibold text-lg">+91 9930070767</p>
              </div>
            </div>
          </a>

          <a
            href="mailto:bd@terrixa.com"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-[#C5A065] to-[#E5C085] rounded-xl w-14 h-14 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white/60 text-sm mb-1">Email Us</p>
                <p className="text-white font-semibold text-lg">bd@terrixa.com</p>
              </div>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "50Cr+", label: "Assets Advised" },
            { value: "100%", label: "Transparency" },
            { value: "25+", label: "Projects" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C5A065] to-[#E5C085] mb-2 font-[var(--font-heading)]">
                {stat.value}
              </div>
              <p className="text-white/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
