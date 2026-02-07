import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { OurApproach } from "@/components/about/our-approach"
import { BusinessManifesto } from "@/components/about/business-manifesto"
import { AdvisoryVerticals } from "@/components/about/advisory-verticals"
import { WhoWeWorkWithAbout } from "@/components/about/who-we-work-with-about"
import { OurCommitment } from "@/components/about/our-commitment"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About Terrixa Realty | Clarity Over Speculation",
  description: "Research-led property advisory firm. Data over hype. Feasibility over assumptions. Long-term value over short-term deals. Serving land investors, developers, and businesses across Pune and emerging growth markets.",
  keywords: ["research-driven advisory", "property consulting", "land advisory", "clarity over speculation", "transparent real estate", "Terrixa Realty about"],
}

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <AboutHero />
      <OurApproach />
      <BusinessManifesto />
      <AdvisoryVerticals />
      <WhoWeWorkWithAbout />
      <OurCommitment />
      <AboutCTA />
      <Footer />
    </main>
  )
}
