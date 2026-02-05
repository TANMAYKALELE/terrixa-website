"use client"

import { Building2, Landmark, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const partners = [
  {
    icon: Users,
    title: "Individual Homebuyers",
    description: "End-users seeking the right residential property.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Users,
    title: "Property & Land Investors",
    description: "Strategic investors seeking long-term value.",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Landmark,
    title: "Landowners",
    description: "Property owners seeking advisory and exit strategies.",
    image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Building2,
    title: "Developers & Promoters",
    description: "Real estate developers seeking land acquisition.",
    image: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Building2,
    title: "Businesses & Commercial Occupiers",
    description: "Companies seeking office and retail spaces.",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
]

export function WhoWeWorkWith() {
  return (
    <section className="py-16 md:py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 font-[var(--font-heading)]">
            Who We Work With
          </h2>
          <p className="text-charcoal/70">Our Clients</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Card className="group overflow-hidden bg-white border-charcoal/10 hover:border-gold hover:shadow-2xl transition-all duration-500">
                <div className="aspect-video overflow-hidden relative">
                  <motion.img
                    src={partner.image}
                    alt={partner.title}
                    className="w-full h-full object-cover"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.65, 0, 0.35, 1],
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <partner.icon className="h-5 w-5 text-gold" />
                    <h3 className="font-bold text-sm text-charcoal font-[var(--font-heading)]">{partner.title}</h3>
                  </div>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{partner.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-charcoal/70 mt-10 max-w-2xl mx-auto"
        >
          Each engagement is tailored to <strong>specific goals, timelines, and risk profiles</strong>.
        </motion.p>
      </div>
    </section>
  )
}
