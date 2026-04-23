
import { motion } from 'framer-motion';
import { Brain, Globe, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Multi-LLM Orchestration',
    description:
      'Analyzing through 98% of available models (GPT-4, Claude, Gemini) to eliminate single-model bias and deliver comprehensive intelligence.',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Globe,
    title: 'The Digital Ocean',
    description:
      'Access to billions of dynamic sources beyond social media. We tap into deep market signals invisible to traditional research.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Auto-Verification Loop',
    description:
      'Zero-trust architecture where AI validates its own results. Multiple verification layers ensure strategic accuracy.',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
];

export function BentoGrid() {
  return (
    <section className="relative py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            The Engine
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Three core capabilities that power strategic intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 bg-card border border-border rounded-2xl h-full flex flex-col transition-all duration-300 hover:border-muted/60">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 inline-flex p-3 bg-foreground/10 rounded-xl">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-border rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { value: '98%', label: 'Model Coverage' },
            { value: 'Billions', label: 'Data Sources' },
            { value: 'Zero-Trust', label: 'Verification' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 bg-card border border-border rounded-xl text-center"
            >
              <div className="text-3xl font-semibold mb-2">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
