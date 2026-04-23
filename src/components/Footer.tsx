
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo/Brand */}
          <div className="text-2xl font-semibold mb-8 tracking-tight">
            2laps
          </div>

          {/* Contact */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <a
              href="mailto:r@2laps.ai"
              className="group flex items-center gap-2 text-muted hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Rodrigo Quesada</span>
              <span className="text-sm opacity-70">r@2laps.ai</span>
            </a>
            <a
              href="mailto:s@2laps.ai"
              className="group flex items-center gap-2 text-muted hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Suso Quesada</span>
              <span className="text-sm opacity-70">s@2laps.ai</span>
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-border mb-8" />

          {/* Bottom text */}
          <div className="text-sm text-muted">
            <p className="mb-2">Strategic Intelligence Engine</p>
            <p>© {new Date().getFullYear()} 2laps. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
