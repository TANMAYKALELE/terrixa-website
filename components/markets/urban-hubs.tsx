"use client"

import { motion } from "framer-motion"
import { Building2 } from "lucide-react"

const locations = [
  {
    name: "Pune",
    description: "Pune remains a strong real estate market with diversified demand across residential, commercial, and mixed-use assets. We provide advisory across investment purchases, residential transactions, and commercial leasing.",
    image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Hinjewadi",
    description: "Hinjewadi is Pune's largest IT and employment hub, driving sustained demand for commercial office spaces and residential rentals. Our services include commercial leasing and tenant representation.",
    image: "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Wakad",
    description: "Wakad offers a balanced mix of residential living and commercial activity, supported by excellent connectivity. We advise buyers and investors on residential purchases and leasing opportunities.",
    image: "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Ravet",
    description: "Ravet is an emerging residential market with improving infrastructure and affordability, making it attractive for end-users and long-term investors.",
    image: "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Talegaon",
    description: "Talegaon benefits from industrial presence and connectivity, supporting both residential demand and commercial activity. We assist clients with residential advisory and leasing opportunities.",
    image: "https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
]

export function UrbanHubs() {
  return (
    <section className="py-16 md:py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Building2 className="h-5 w-5 text-gold" />
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">SECTION B</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-3 font-[var(--font-heading)]">
            Residential & Commercial Growth Hubs
          </h2>
          <p className="text-lg text-charcoal/70">
            Urban & Business-Centric Markets
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-charcoal/70 text-center mb-12 max-w-3xl mx-auto"
        >
          These markets are driven by <strong className="text-charcoal">employment hubs, infrastructure development, and consistent residential and commercial demand</strong>.
        </motion.p>

        <div className="max-w-5xl mx-auto space-y-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white border border-charcoal/10 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="aspect-video md:aspect-auto overflow-hidden md:order-last">
                  <motion.img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                  />
                </div>
                <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-charcoal mb-3 font-[var(--font-heading)]">
                    {location.name}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    {location.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
