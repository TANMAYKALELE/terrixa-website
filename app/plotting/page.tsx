import type { Metadata } from "next"
import { Header } from "@/components/header"
import { PlottingHero } from "@/components/plotting/plotting-hero"
import { WhyPlotting } from "@/components/plotting/why-plotting"
import { DueDiligenceCheck } from "@/components/plotting/due-diligence-check"
import { ProcessTimeline } from "@/components/plotting/process-timeline"
import { CuratedPlots } from "@/components/plotting/curated-plots"
import { TerrixaPromise } from "@/components/plotting/brego-promise"
import { PlottingTestimonials } from "@/components/plotting/plotting-testimonials"
import { PlottingContactForm } from "@/components/plotting/plotting-contact-form"
import { PlottingFooter } from "@/components/plotting/plotting-footer"

export const metadata: Metadata = {
  title: "Land Investment & Due Diligence Advisory | Terrixa Realty",
  description: "Risk mitigation through verified plotting opportunities. Clear title checks, zoning analysis, access evaluation, and exit strategy assessment for land investments in Karjat, Lonavala, Khandala, Kamshet & Pawna.",
  keywords: ["land investment", "plotting advisory", "due diligence", "title verification", "risk mitigation", "Karjat plots", "Lonavala land", "property due diligence"],
}

export default function PlottingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PlottingHero />
      <WhyPlotting />
      <DueDiligenceCheck />
      <ProcessTimeline />
      <CuratedPlots />
      <TerrixaPromise />
      <PlottingTestimonials />
      <PlottingContactForm />
      <PlottingFooter />
    </main>
  )
}
