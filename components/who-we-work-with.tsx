"use client"

import { Building2, Landmark, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "@/lib/motion"

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
    <section className="py-24 md:py-32 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-16 bg-gradient-to-r from-[#C5A065] to-[#E5C085] rounded-full mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-[var(--font-heading)]">
            Who We Work With
          </h2>
          <p className="text-charcoal/70">Our Clients</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <Card className="group overflow-hidden bg-white border-charcoal/10 hover:border-[#C5A065]/40 hover:shadow-2xl transition-all duration-500 rounded-2xl h-full">
                <div className="aspect-video overflow-hidden relative">
                  <motion.img
                    src={partner.image}
                    alt={partner.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <partner.icon className="h-5 w-5 text-[#C5A065]" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-charcoal font-[var(--font-heading)] mb-2">{partner.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{partner.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-charcoal/70 mt-10 max-w-2xl mx-auto"
        >
          Each engagement is tailored to <strong className="text-charcoal">specific goals, timelines, and risk profiles</strong>.
        </motion.p>
      </div>
    </section>
  )
}
