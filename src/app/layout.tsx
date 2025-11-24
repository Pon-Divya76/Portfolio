import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Head from 'next/head';
import type { ReactNode } from "react";

import { NavTabs } from "@/components/NavTabs";
import { NAV_ITEMS } from "@/data/navigation";

import "./globals.css";

// Base URL for absolute URLs in meta tags
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';

// Use Inter as the primary font with fallbacks
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space",
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Slightly more permissive for better accessibility
  themeColor: '#0f172a', // Updated to match our primary dark color
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    default: "Pon Divya · Portfolio",
    template: "%s | Pon Divya",
  },
  description: "Professional portfolio of Pon Divya - Web Developer & Designer | Modern, responsive, and interactive portfolio showcasing my work and skills.",
  keywords: ["portfolio", "web developer", "designer", "Pon Divya", "Next.js", "React", "TypeScript"],
  authors: [{ name: 'Pon Divya' }],
  creator: 'Pon Divya',
  publisher: 'Pon Divya',
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'Pon Divya · Portfolio',
    description: 'Professional portfolio of Pon Divya - Web Developer & Designer',
    siteName: 'Pon Divya Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pon Divya Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pon Divya · Portfolio',
    description: 'Professional portfolio of Pon Divya - Web Developer & Designer',
    images: [`${baseUrl}/og-image.png`],
    creator: '@pon_divya',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/space-grotesk-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-carbon to-graphite text-gray-100 antialiased">
        <div className="relative flex min-h-screen flex-col">
          <NavTabs items={NAV_ITEMS} className="sticky top-0 z-50" />
          
          <main className="flex-1">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
              {children}
            </div>
          </main>
          
          <footer className="border-t border-gray-700/30 py-6 bg-gradient-to-r from-gray-900/30 to-gray-800/30 backdrop-blur-sm">
            <div className="container mx-auto px-4 text-center text-sm text-gray-300">
              <p>© {new Date().getFullYear()} Pon Divya. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
