'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, ArrowRight } from 'lucide-react';

export function EarlyAccessModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de envío (aquí integrarías con tu backend o servicio de email)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsLoading(false);

    // Reset después de 3 segundos
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setEmail('');
      setName('');
      setCompany('');
    }, 3000);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium transition-all hover:scale-105 active:scale-95"
      >
        Request Early Access
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
            >
              <div className="bg-background border border-border rounded-2xl p-8 mx-4 shadow-2xl">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 p-2 hover:bg-card rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {!isSubmitted ? (
                  <>
                    {/* Header */}
                    <div className="mb-6">
                      <div className="inline-flex p-3 bg-foreground/10 rounded-xl mb-4">
                        <Mail className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-semibold mb-2">
                        Request Early Access
                      </h2>
                      <p className="text-muted">
                        Join the waitlist and be the first to experience
                        strategic intelligence automation.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium mb-2"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                          placeholder="Acme Inc."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full px-6 py-3 bg-foreground text-background rounded-lg font-medium transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isLoading ? 'Submitting...' : 'Join Waitlist'}
                      </button>
                    </form>
                  </>
                ) : (
                  /* Success State */
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="inline-flex p-4 bg-green-500/10 rounded-full mb-4">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      You're on the list!
                    </h3>
                    <p className="text-muted">
                      We'll reach out soon with early access details.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
