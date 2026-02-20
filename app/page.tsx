import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhoWeAre } from "@/components/who-we-are"
import { WhatWeDo } from "@/components/what-we-do"
import { IntegratedServices } from "@/components/integrated-services"
import { ResearchValuation } from "@/components/home/research-valuation"
import { MarketsOverview } from "@/components/home/markets-overview"
import { WhyTerrixa } from "@/components/home/why-terrixa"
import { WhoWeWorkWith } from "@/components/who-we-work-with"
import { HomeCTA } from "@/components/home/home-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
      <IntegratedServices />
      <ResearchValuation />
      <MarketsOverview />
      <WhyTerrixa />
      <WhoWeWorkWith />
      <HomeCTA />
      <Footer />
    </main>
  )
}
