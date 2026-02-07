import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MarketsHero } from "@/components/markets/markets-hero"
import { MarketStrategy } from "@/components/markets/market-strategy"
import { LifestyleMarkets } from "@/components/markets/lifestyle-markets"
import { UrbanHubs } from "@/components/markets/urban-hubs"
import { HowWeAdvise } from "@/components/markets/how-we-advise"
import { MarketsAudience } from "@/components/markets/markets-audience"
import { MarketsCTA } from "@/components/markets/markets-cta"

export const metadata: Metadata = {
  title: "Markets We Serve | Pune & High-Growth Corridors | Terrixa Realty",
  description: "Real estate expertise across Pune and high-growth corridors. Advisory services in land broking, residential sales, and commercial leasing across Karjat, Lonavala, Khandala, Kamshet, Pawna, Hinjewadi, Wakad, Ravet, and Talegaon.",
  keywords: ["Pune real estate", "Karjat land investment", "Lonavala property", "Hinjewadi commercial", "high-growth corridors", "lifestyle markets", "urban hubs"],
}

export default function MarketsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <MarketsHero />
      <MarketStrategy />
      <LifestyleMarkets />
      <UrbanHubs />
      <HowWeAdvise />
      <MarketsAudience />
      <MarketsCTA />
      <Footer />
    </main>
  )
}
