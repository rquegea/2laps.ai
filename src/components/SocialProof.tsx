'use client';

import { motion } from 'framer-motion';

const logos = [
  'Moët Hennessy',
  'Grupo Planeta',
  'Tolsa',
  'Veuve Clicquot',
  'Krug',
];

export function SocialProof() {
  return (
    <section className="relative py-24 border-y border-border overflow-hidden bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm text-muted text-center mb-12 tracking-wider uppercase"
        >
          Trusted by strategic leaders at
        </motion.p>

        {/* Marquee */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: [0, -50 + '%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
              className="flex flex-shrink-0 gap-16 pr-16"
            >
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[200px]"
                >
                  <span className="text-2xl font-medium text-muted/60 whitespace-nowrap">
                    {logo}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-card to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-card to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
