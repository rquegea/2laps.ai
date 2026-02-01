'use client';

const logos = [
  'Moët Hennessy',
  'Grupo Planeta',
  'Tolsa',
  'Veuve Clicquot',
  'Krug',
];

export function SocialProof() {
  return (
    <section className="relative py-16 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm text-muted text-center mb-8 tracking-wider uppercase">
          Trusted by strategic leaders at
        </p>

        {/* Static logos */}
        <div className="flex justify-center flex-wrap gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-[#F3F4F6] rounded-xl px-10 py-6 flex items-center justify-center"
            >
              <span className="text-xl font-bold text-gray-900 whitespace-nowrap">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
