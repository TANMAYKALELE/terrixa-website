"use client"

import { motion } from "framer-motion"
import { Building2 } from "lucide-react"
import { staggerContainer, scaleIn } from "@/lib/motion"

const locations = [
  {
    name: "Pune",
    description:
      "Pune remains a strong real estate market with diversified demand across residential, commercial, and mixed-use assets. We provide advisory across investment purchases, residential transactions, and commercial leasing.",
    image:
      "https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Commercial Hub",
  },
  {
    name: "Hinjewadi",
    description:
      "Hinjewadi is Pune's largest IT and employment hub, driving sustained demand for commercial office spaces and residential rentals. Our services include commercial leasing and tenant representation.",
    image:
      "https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Commercial Hub",
  },
  {
    name: "Wakad",
    description:
      "Wakad offers a balanced mix of residential living and commercial activity, supported by excellent connectivity. We advise buyers and investors on residential purchases and leasing opportunities.",
    image:
      "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Residential Growth",
  },
  {
    name: "Ravet",
    description:
      "Ravet is an emerging residential market with improving infrastructure and affordability, making it attractive for end-users and long-term investors.",
    image:
      "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Residential Growth",
  },
  {
    name: "Talegaon",
    description:
      "Talegaon benefits from industrial presence and connectivity, supporting both residential demand and commercial activity. We assist clients with residential advisory and leasing opportunities.",
    image:
      "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "Commercial Hub",
  },
]

export function UrbanHubs() {
  return (
    <section className="py-16 md:py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Building2 className="h-5 w-5 text-[#C5A065]" />
            <span className="text-[#C5A065] font-semibold text-sm tracking-wider uppercase">
              SECTION B
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-[var(--font-heading)]">
            Residential & Commercial Growth Hubs
          </h2>
          <p className="text-lg text-white/60">
            Urban & Business-Centric Markets
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/60 text-center mb-12 max-w-3xl mx-auto"
        >
          These markets are driven by{" "}
          <strong className="text-white">
            employment hubs, infrastructure development, and consistent
            residential and commercial demand
          </strong>
          .
        </motion.p>

        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              transition={{ duration: 0.4 }}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer w-full md:w-[calc(50%-12px)]"
            >
              {/* Image with zoom on hover */}
              <img
                src={location.image}
                alt={location.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Category badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#C5A065]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide uppercase">
                  {location.badge}
                </span>
              </div>

              {/* Frosted glass overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-white/5 backdrop-blur-sm border-t border-white/10">
                <h3 className="text-xl font-bold text-white mb-2 font-[var(--font-heading)]">
                  {location.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                  {location.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
