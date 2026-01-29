import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationsHero } from "@/components/locations/locations-hero"
import { KarjatSection } from "@/components/locations/karjat-section"
import { LonavalaSection } from "@/components/locations/lonavala-section"
import { LocationComparison } from "@/components/locations/location-comparison"
import { LocationsCTA } from "@/components/locations/locations-cta"

export default function LocationsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <LocationsHero />
      <KarjatSection />
      <LonavalaSection />
      <LocationComparison />
      <LocationsCTA />
      <Footer />
    </main>
  )
}
