import type { Metadata, Viewport } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import Head from 'next/head';
import type { ReactNode } from "react";

import RainBackground from "@/app/components/RainBackground";
import { NavTabs } from "@/components/NavTabs";
import { NAV_ITEMS } from "@/data/navigation";

import "./globals.css";

// Base URL for absolute URLs in meta tags
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space" 
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#080b12',
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: "Pon Divya · Portfolio",
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
    <html lang="en" className="scroll-smooth">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#080b12" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={`${poppins.variable} ${spaceGrotesk.variable} font-sans viewport`}>
        <RainBackground />
        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="px-4 sm:px-6">
            <NavTabs items={NAV_ITEMS} />
          </header>
          <main className="flex-1 pb-16">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

