import { Inter, Poppins, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Md. Kawsar Ahmed - Software Engineer Portfolio",
    template: "%s | Md. Kawsar Ahmed"
  },
  description: "Portfolio of Md. Kawsar Ahmed, a passionate Software Engineer with 3 year of experience and 7-time hackathon winner. Specializing in React, Next.js, Node.js, and modern web development.",
  keywords: [
    "Md. Kawsar Ahmed",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Node.js Developer",
    "Portfolio",
    "Hackathon Winner",
    "Bangladesh Developer",
    "MERN Stack Developer"
  ],
  authors: [{ name: "Md. Kawsar Ahmed", url: "https://kawsarahmed.dev" }],
  creator: "Md. Kawsar Ahmed",
  publisher: "Md. Kawsar Ahmed",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kawsarahmed.dev',
    siteName: 'Md. Kawsar Ahmed - Software Engineer Portfolio',
    title: 'Md. Kawsar Ahmed - Software Engineer Portfolio',
    description: 'Portfolio of Md. Kawsar Ahmed, a passionate Software Engineer with 1 year of experience and 7-time hackathon winner. Specializing in React, Next.js, Node.js, and modern web development.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Md. Kawsar Ahmed - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md. Kawsar Ahmed - Software Engineer Portfolio',
    description: 'Portfolio of Md. Kawsar Ahmed, a passionate Software Engineer with 1 year of experience and 7-time hackathon winner.',
    images: ['/og-image.png'],
    creator: '@kawsarahmed_dev',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/favicon-32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://kawsarahmed.dev',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <link rel="canonical" href="https://kawsaar.me" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased bg-black text-white`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
