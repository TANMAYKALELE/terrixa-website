import { Header } from "@/components/header"

import { HeroSection } from "@/components/hero-section"

import { MetricsBar } from "@/components/metrics-bar"

import { WhoWeAre } from "@/components/who-we-are"

import { WhatWeDo } from "@/components/what-we-do"

import { WhoWeWorkWith } from "@/components/who-we-work-with"

import { HowItWorks } from "@/components/how-it-works"

import { DiscoverInvest } from "@/components/discover-invest"

import { LocationsSection } from "@/components/locations-section"

import { Testimonials } from "@/components/testimonials"

import { FaqSection } from "@/components/faq-section"

import { CtaSection } from "@/components/cta-section"

import { Footer } from "@/components/footer"



export default function Home() {

return (

<main className="min-h-screen">

<Header />

<HeroSection />

<MetricsBar />

<WhoWeAre />

<WhatWeDo />

<WhoWeWorkWith />

<HowItWorks />

<DiscoverInvest />

<LocationsSection />

<Testimonials />

<FaqSection />

<CtaSection />

<Footer />

</main>

)

}