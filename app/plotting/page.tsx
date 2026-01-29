import { Header } from "@/components/header"
import { PlottingHero } from "@/components/plotting/plotting-hero"
import { WhyPlotting } from "@/components/plotting/why-plotting"
import { ProcessTimeline } from "@/components/plotting/process-timeline"
import { CuratedPlots } from "@/components/plotting/curated-plots"
import { TerrixaPromise } from "@/components/plotting/brego-promise"
import { PlottingTestimonials } from "@/components/plotting/plotting-testimonials"
import { PlottingContactForm } from "@/components/plotting/plotting-contact-form"
import { PlottingFooter } from "@/components/plotting/plotting-footer"

export default function PlottingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PlottingHero />
      <WhyPlotting />
      <ProcessTimeline />
      <CuratedPlots />
      <TerrixaPromise />
      <PlottingTestimonials />
      <PlottingContactForm />
      <PlottingFooter />
    </main>
  )
}
