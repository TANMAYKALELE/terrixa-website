"use client"

import { MaskText } from "@/components/mask-text"
import { MapPin, PieChart, Home, TrendingUp } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Access Prime Land Locations",
    description: "Discover premium plots in rapidly developing areas across India.",
  },
  {
    icon: PieChart,
    title: "Diversify Your Investments",
    description: "Build a balanced portfolio with land investments that offer stable returns.",
  },
  {
    icon: Home,
    title: "Build Your Home",
    description: "Find the perfect plot to construct your dream home in your preferred location.",
  },
  {
    icon: TrendingUp,
    title: "Robust Capital Gains",
    description: "Benefit from land appreciation and secure long-term wealth creation.",
  },
]

export function DiscoverInvest() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <MaskText>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-charcoal mb-12 font-[var(--font-heading)]">
            Discover & Invest
          </h2>
        </MaskText>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <MaskText key={index} delay={index * 0.1}>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-accent-blue/20 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-accent-blue" />
                </div>
                <h3 className="font-semibold text-charcoal mb-2 font-[var(--font-heading)]">{feature.title}</h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">{feature.description}</p>
              </div>
            </MaskText>
          ))}
        </div>
      </div>
    </section>
  )
}
