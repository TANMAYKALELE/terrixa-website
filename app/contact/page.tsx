import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactConsultationForm } from "@/components/contact/consultation-form"
import { AdvisoryProcess } from "@/components/contact/advisory-process"
import { ContactAudience } from "@/components/contact/contact-audience"
import { WhySpeak } from "@/components/contact/why-speak"
import { ContactMarkets } from "@/components/contact/contact-markets"
import { ContactCTA } from "@/components/contact/contact-cta"

export const metadata: Metadata = {
  title: "Contact Terrixa Realty | Request a Consultation",
  description: "Let's discuss your property goals. Whether you are planning a land investment, residential purchase, or commercial lease, Terrixa Realty offers strategic advisory backed by market intelligence and local expertise.",
  keywords: ["contact Terrixa", "property consultation", "real estate advisory", "land investment consultation", "Pune property advisor"],
}

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <ContactHero />
      <ContactConsultationForm />
      <AdvisoryProcess />
      <ContactAudience />
      <WhySpeak />
      <ContactMarkets />
      <ContactCTA />
      <Footer />
    </main>
  )
}
