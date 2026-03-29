import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TickerBar } from "@/components/layout/TickerBar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://2laps.ai'),
  title: {
    default: "2laps - What AI Recommends | El Bloomberg de la Visibilidad IA",
    template: "%s | 2laps",
  },
  description: "Descubre que marcas recomiendan ChatGPT, Gemini, Claude, Perplexity, Grok y DeepSeek en cada mercado. Rankings, tendencias y analisis de visibilidad IA.",
  keywords: [
    "visibilidad IA",
    "recomendaciones IA",
    "ChatGPT rankings",
    "GEO marketing",
    "AI market intelligence",
    "2laps",
    "inteligencia de mercado IA",
  ],
  authors: [{ name: "2laps by T&T", url: "https://2laps.ai" }],
  creator: "2laps",
  publisher: "T&T (Truco y Trufa)",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://2laps.ai",
    title: "2laps - What AI Recommends",
    description: "El Bloomberg de la visibilidad IA. Descubre que marcas recomiendan los principales modelos de IA.",
    siteName: "2laps",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "2laps - What AI Recommends",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2laps - What AI Recommends",
    description: "El Bloomberg de la visibilidad IA.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/switzer"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <div className="relative min-h-screen flex flex-col">
          {/* Dark zone: header + ticker */}
          <div className="bg-background text-foreground">
            <Header />
            <TickerBar />
          </div>
          {/* White zone: content + footer */}
          <main className="flex-1 bg-white text-[#1a1a1a]">
            <div className="max-w-[1400px] mx-auto border-x border-[#c0c0c0] min-h-full">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
