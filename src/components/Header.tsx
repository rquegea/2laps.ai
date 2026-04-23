
export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-500"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/logos/2lapslogoletras.png"
              alt="2laps"
              width="100"
              height="28"
              className="h-7 w-auto"
            />
          </a>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/features"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="/enterprise"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Enterprise
            </a>
            <a
              href="/pricing"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Pricing
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
    </header>
  );
}
