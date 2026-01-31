'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    label: 'What?',
    description: 'Data Overload',
    color: 'text-red-500',
  },
  {
    label: 'So What?',
    description: 'Manual Analysis',
    color: 'text-yellow-500',
  },
  {
    label: 'Now What?',
    description: '2laps Strategic Synthesis',
    color: 'text-green-500',
  },
];

export function FrameworkSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            The Framework
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            From noise to strategic clarity in three critical stages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="relative p-8 bg-card border border-border rounded-2xl h-full flex flex-col">
                {/* Step number */}
                <div className="text-sm text-muted mb-4">
                  Step {index + 1}
                </div>

                {/* Label */}
                <div className={`text-3xl font-semibold mb-3 ${step.color}`}>
                  {step.label}
                </div>

                {/* Description */}
                <div className="text-lg text-muted flex-grow">
                  {step.description}
                </div>

                {/* Arrow indicator for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-muted" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-6 bg-foreground/5 border border-border rounded-2xl text-center"
        >
          <p className="text-muted">
            Traditional analysis stops at <span className="text-foreground font-medium">So What?</span>
            <br />
            2laps answers <span className="text-green-500 font-medium">Now What?</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
