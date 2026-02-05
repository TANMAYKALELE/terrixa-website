import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { Philosophy } from "@/components/about/philosophy"
import { BusinessManifesto } from "@/components/about/business-manifesto"
import { ServicesGrid } from "@/components/about/services-grid"
import { CompanyStats } from "@/components/about/company-stats"
import { ContactSection } from "@/components/about/contact-section"
import { FooterContactBar } from "@/components/footer-contact-bar"

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
      <Philosophy />
      <BusinessManifesto />
      <ServicesGrid />
      <CompanyStats />
      <ContactSection />
      <FooterContactBar />
      <Footer />
    </main>
  )
}
