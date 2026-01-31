import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://2laps.ai'),
  title: "2laps - Strategic Intelligence Engine | Understand the market before anyone else",
  description: "The first AI-driven Strategic Intelligence Engine. We automate market reasoning to solve the Now What? Multi-LLM orchestration analyzing through 98% of available models.",
  keywords: [
    "strategic intelligence",
    "AI market analysis",
    "competitive intelligence",
    "market intelligence",
    "multi-llm orchestration",
    "business intelligence",
    "strategic analysis",
    "market research automation",
    "GPT-4",
    "Claude",
    "Gemini",
    "AI strategic planning"
  ],
  authors: [{ name: "2laps", url: "https://2laps.ai" }],
  creator: "2laps",
  publisher: "2laps",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://2laps.ai",
    title: "2laps - Strategic Intelligence Engine",
    description: "The first AI-driven Strategic Intelligence Engine. Understand the market before anyone else.",
    siteName: "2laps",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "2laps - Strategic Intelligence Engine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2laps - Strategic Intelligence Engine",
    description: "The first AI-driven Strategic Intelligence Engine. Understand the market before anyone else.",
    images: ["/og-image.png"],
    creator: "@2lapsai",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // other: "your-other-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.cdnfonts.com/css/switzer" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <StructuredData />
        <div className="relative min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
