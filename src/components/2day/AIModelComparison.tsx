'use client';

import { motion } from 'framer-motion';
import {
  Bot,
  Globe,
  Zap,
  Brain,
  FileText,
  BarChart3,
  Database,
  Sparkles
} from 'lucide-react';

// Tipos de datos
type ModelType = 'ai' | 'data';

interface ModelInfo {
  id: string;
  name: string;
  type: ModelType;
  role: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const models: ModelInfo[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    type: 'ai',
    role: 'Reasoning Engine',
    description: 'General-purpose strategic reasoning and synthesis of complex unstructured data.',
    icon: Bot,
    color: '#10A37F'
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    type: 'ai',
    role: 'Web Context',
    description: 'Real-time verification against live web data to ground insights in current events.',
    icon: Globe,
    color: '#22B3AA'
  },
  {
    id: 'gemini',
    name: 'Gemini',
    type: 'ai',
    role: 'Multimodal Nexus',
    description: 'Cross-referencing visual and textual data from the broader Google ecosystem.',
    icon: Sparkles,
    color: '#4285F4'
  },
  {
    id: 'grok',
    name: 'Grok',
    type: 'ai',
    role: 'Social Sentiment',
    description: 'Real-time tap into social discourse and raw unfiltered public sentiment.',
    icon: Zap,
    color: '#000000'
  },
  {
    id: 'claude',
    name: 'Claude',
    type: 'ai',
    role: 'Analytical Depth',
    description: 'High-context window processing for deep analysis of lengthy reports and documents.',
    icon: Brain,
    color: '#D97757'
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    type: 'ai',
    role: 'Technical Logic',
    description: 'Specialized in code and logic-heavy pattern recognition for structural market data.',
    icon: Database,
    color: '#6366F1'
  },
  {
    id: 'patents',
    name: 'Patents',
    type: 'data',
    role: 'Innovation Track',
    description: 'Early-warning system for competitor R&D and technological shifts.',
    icon: FileText,
    color: '#EC4899'
  },
  {
    id: 'sales',
    name: 'Sales Analysis',
    type: 'data',
    role: 'Performance',
    description: 'Correlating external market noise with internal revenue impact.',
    icon: BarChart3,
    color: '#F59E0B'
  }
];


export function AIModelComparison() {
  return (
    <div className="w-full h-full bg-white font-sans text-gray-900">
      {/* Models Grid */}
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Intelligence Models</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced AI models designed for comprehensive market intelligence analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model, index) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 p-6 relative overflow-hidden group"
                >
                  {/* Decorative top accent */}
                  <div
                    className="absolute top-0 left-0 w-full h-1 transition-colors duration-300"
                    style={{ backgroundColor: model.color }}
                  />

                  <div className="flex flex-col items-center text-center">
                    <div
                      className="p-4 rounded-xl mb-4 transition-colors duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${model.color}15`, color: model.color }}
                    >
                      <Icon size={32} />
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {model.name}
                    </h3>

                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      {model.role}
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {model.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-gray-50 w-full">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs text-gray-500">Active</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
