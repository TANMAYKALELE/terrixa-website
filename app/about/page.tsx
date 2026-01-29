import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { Philosophy } from "@/components/about/philosophy"
import { ServicesGrid } from "@/components/about/services-grid"
import { CompanyStats } from "@/components/about/company-stats"
import { AboutContactForm } from "@/components/about/about-contact-form"

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <AboutHero />
      <Philosophy />
      <ServicesGrid />
      <CompanyStats />
      <AboutContactForm />
      <Footer />
    </main>
  )
}
