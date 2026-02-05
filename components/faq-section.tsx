"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MaskText } from "@/components/mask-text"

const faqs = [
  {
    question: "What does Terrixa do?",
    answer:
      "Terrixa is a land investment platform that helps individuals and institutions buy, sell, and invest in land across India. We provide end-to-end services including legal verification, valuation, and documentation.",
  },
  {
    question: "How can I trust Terrixa as an investor?",
    answer:
      "We follow a rigorous due diligence process for every property. This includes title verification, legal clearance, and fair market valuation. All our transactions are fully transparent and documented.",
  },
  {
    question: "What forms of land can I invest in?",
    answer:
      "You can invest in various types of land including residential plots, agricultural land, commercial plots, and plotted developments. We offer options across different price ranges and locations.",
  },
  {
    question: "What is the process for buying land via Terrixa?",
    answer:
      "The process involves: 1) Sharing your requirements, 2) Receiving personalized recommendations, 3) Site visits, 4) Legal verification, 5) Documentation and registration. Our team guides you through each step.",
  },
  {
    question: "What kind of land does Terrixa deal in?",
    answer:
      "We deal in NA (Non-Agricultural) residential plots, agricultural land, commercial plots, and land suitable for development. All properties undergo thorough legal and physical verification.",
  },
  {
    question: "Does Terrixa help in post-purchase matters?",
    answer:
      "Yes, we provide post-purchase support including documentation, mutation assistance, and guidance on development permissions. We're committed to long-term relationships with our clients.",
  },
]

export function FaqSection() {
  return (
    <section className="py-16 md:py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <MaskText>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 font-[var(--font-heading)]">
                Have A Question? We Are Here To Help.
              </h2>
            </MaskText>

            <MaskText delay={0.1}>
              <p className="text-charcoal/70 mb-6">
                Get in touch with us using the contact information below or send us a message.
              </p>
            </MaskText>

            <MaskText delay={0.2}>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-charcoal/60">Email</div>
                  <a href="mailto:info@terrixa.com" className="text-charcoal hover:text-gold transition-colors">
                    info@terrixa.com
                  </a>
                </div>
                <div>
                  <div className="text-sm text-charcoal/60">Phone</div>
                  <a href="tel:+919876543210" className="text-charcoal hover:text-gold transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div>
                  <div className="text-sm text-charcoal/60">Address</div>
                  <p className="text-charcoal">
                    Terrixa HQ Tower 1, Lower Parel,
                    <br />
                    Mumbai 400013, Maharashtra, India
                  </p>
                </div>
              </div>
            </MaskText>
          </div>

          <MaskText delay={0.3}>
            <div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-charcoal/10">
                    <AccordionTrigger className="text-left text-charcoal hover:text-gold font-[var(--font-heading)]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-charcoal/70">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </MaskText>
        </div>
      </div>
    </section>
  )
}
