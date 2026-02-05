'use client';

import { memo } from 'react';

const logos = [
  'Moët Hennessy',
  'Grupo Planeta',
  'Tolsa',
  'Veuve Clicquot',
  'Krug',
  'Louis Vuitton',
  'LVMH',
  'Cartier'
];

export const SocialProof = memo(function SocialProof() {
  return (
    <section className="relative py-16 overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="text-sm text-muted text-center mb-8 tracking-wider uppercase">
          Trusted by strategic leaders at
        </p>

        {/* Static logos - Alineados con límites izquierdo y derecho */}
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-[#F3F4F6] rounded-xl flex items-center justify-center h-20 md:h-24"
            >
              <span className="text-[10px] sm:text-sm md:text-base font-bold text-gray-900 text-center break-words">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
