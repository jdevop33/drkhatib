import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Dr. Milad Khatib - Civil Engineering Consultant & Patent Holder",
  description:
    "Professional civil engineering consulting services by Dr. Milad Khatib, PhD in Structural and Geotechnical Engineering. Expert in infrastructure design, earthquake engineering, and water management with 26+ years of military and academic experience. Holder of 2 patents and author of 35+ research publications.",
  keywords:
    "civil engineering, structural engineering, geotechnical engineering, consulting, Lebanon, earthquake engineering, water management, infrastructure design, patents, research, SPSC ambassador, sustainability",
  authors: [{ name: "Dr. Milad Khatib" }],
  creator: "Dr. Milad Khatib",
  publisher: "Dr. Milad Khatib Consulting",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Dr. Milad Khatib - Civil Engineering Consultant & Patent Holder",
    description:
      "Professional civil engineering consulting services with expertise in structural and geotechnical engineering, backed by military precision and academic excellence. Holder of 2 patents with 35+ research publications.",
    url: "https://miladkhatib.com",
    siteName: "Dr. Milad Khatib Consulting",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/dr-khatib-portrait.png",
        width: 1200,
        height: 630,
        alt: "Dr. Milad Khatib - Civil Engineering Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Milad Khatib - Civil Engineering Consultant & Patent Holder",
    description:
      "Professional civil engineering consulting services with expertise in structural and geotechnical engineering. 26+ years experience, 2 patents, 35+ publications.",
    images: ["/images/dr-khatib-portrait.png"],
  },
  alternates: {
    canonical: "https://miladkhatib.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "og:site_name": "Dr. Milad Khatib Consulting",
    "og:locale": "en_US",
    "article:author": "Dr. Milad Khatib",
    "profile:first_name": "Milad",
    "profile:last_name": "Khatib",
    "profile:username": "multidisciplinary-dr",
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
