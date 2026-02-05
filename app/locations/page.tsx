import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationsHero } from "@/components/locations/locations-hero"
import { KarjatSection } from "@/components/locations/karjat-section"
import { LonavalaSection } from "@/components/locations/lonavala-section"
import { LocationSplitSections } from "@/components/locations/location-split-sections"
import { LocationsCTA } from "@/components/locations/locations-cta"

export const metadata: Metadata = {
  title: "High-Growth Corridors: Pune, Karjat & Lonavala | Terrixa Realty",
  description: "Strategic location advisory for lifestyle markets (Karjat, Lonavala, Khandala, Kamshet, Pawna) and urban commercial hubs (Pune, Hinjewadi, Wakad, Ravet, Talegaon). Research-backed market intelligence for informed investment.",
  keywords: ["Pune real estate", "Karjat land", "Lonavala property", "Hinjewadi commercial", "Wakad leasing", "lifestyle markets", "urban hubs", "high-growth corridors"],
}

export default function LocationsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <LocationsHero />
      <KarjatSection />
      <LonavalaSection />
      <LocationSplitSections />
      <LocationsCTA />
      <Footer />
    </main>
  )
}
