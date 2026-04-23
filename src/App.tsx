import React, { Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TickerBar } from "@/components/layout/TickerBar";

const HomePage = React.lazy(() => import("@/pages/Home"));
const MarketsPage = React.lazy(() => import("@/pages/Markets"));
const MarketDetailPage = React.lazy(() => import("@/pages/MarketDetail"));
const AboutPage = React.lazy(() => import("@/pages/About"));
const FeaturesPage = React.lazy(() => import("@/pages/Features"));
const EnterprisePage = React.lazy(() => import("@/pages/Enterprise"));
const PricingPage = React.lazy(() => import("@/pages/Pricing"));
const NotFoundPage = React.lazy(() => import("@/pages/NotFound"));

function RootLayout() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="bg-background text-foreground">
        <Header />
        <TickerBar />
      </div>
      <main className="flex-1 bg-white text-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto border-x border-[#c0c0c0] min-h-full">
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#c23b4c]" />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/markets" element={<MarketsPage />} />
        <Route path="/market/:slug" element={<MarketDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/enterprise" element={<EnterprisePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
