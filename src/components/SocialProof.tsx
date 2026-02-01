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
        <div className="flex justify-between items-center w-full gap-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-[#F3F4F6] rounded-xl px-4 flex items-center justify-center min-w-0 flex-1 h-[100px]"
            >
              <span className="text-sm md:text-base lg:text-lg font-bold text-gray-900 text-center break-words">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
