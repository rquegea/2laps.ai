'use client';

import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logos/2lapslogoletras.png"
              alt="2laps"
              className="h-7"
            />
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#framework"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Framework
            </a>
            <a
              href="#engine"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Engine
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:r@2laps.ai"
              className="hidden sm:block text-sm text-muted hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <button className="px-4 py-2 text-sm bg-foreground text-background rounded-full hover:scale-105 transition-transform">
              Request Access
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
