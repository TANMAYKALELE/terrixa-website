import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { ScrollProgress } from "@/components/scroll-progress"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Terrixa Realty | Strategic Land & Property Advisory",
  description: "Research-driven land and property advisory firm. No hype, no speculation—just data-backed insights for land investment, plotting, and commercial leasing across Pune and high-growth corridors.",
  keywords: ["land advisory", "property investment", "risk mitigation", "Pune real estate", "land broking", "plotting", "research-driven advisory", "Terrixa Realty"],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased overflow-x-hidden scroll-smooth tracking-wide`}>
        <ScrollProgress />
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
