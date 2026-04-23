
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Componente de Partícula Flotante
const FloatingParticle = ({ delay, color }: { delay: number; color: string }) => {
  return (
    <motion.div
      initial={{ y: 300, opacity: 0, scale: 0.5 }}
      animate={{
        y: -100,
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 0.8]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
      className="absolute flex flex-col items-center"
      style={{ left: `${Math.random() * 80 + 10}%` }}
    >
      <div className="w-px h-8 bg-gradient-to-t from-transparent to-current opacity-50 mb-1" style={{ color }} />
      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
    </motion.div>
  );
};

export function AIModelComparison() {
  const [selectedId, setSelectedId] = useState<string>('chatgpt');
  const selectedModel = models.find(m => m.id === selectedId) || models[0];

  return (
    <div className="w-full h-full flex bg-white font-sans text-gray-900">
      {/* Sidebar - Left Section */}
      <div className="w-[280px] bg-[#F8F8F8] border-r border-gray-200 flex flex-col flex-shrink-0 text-sm">

        {/* INTELLIGENCE SOURCES Header */}
        <div className="px-5 py-6 pb-4">
          <h2 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide">
            INTELLIGENCE SOURCES
          </h2>
        </div>

        {/* Sources List */}
        <div className="flex-1 overflow-y-auto px-3">
          <div className="space-y-1">
            {models.map((model) => {
              const Icon = model.icon;
              const isSelected = selectedId === model.id;

              return (
                <button
                  key={model.id}
                  onClick={() => setSelectedId(model.id)}
                  className={`w-full px-4 py-3 flex items-center gap-3 transition-colors rounded-xl group
                    ${isSelected ? 'bg-white shadow-sm border border-gray-200/60' : 'hover:bg-gray-100 border border-transparent'}
                  `}
                >
                  <div className={`flex-shrink-0 ${isSelected ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'}`}>
                    <Icon
                      size={20}
                      strokeWidth={isSelected ? 2 : 1.5}
                    />
                  </div>

                  <span className={`text-[15px] ${isSelected ? 'font-bold text-gray-900' : 'font-medium text-gray-600 group-hover:text-gray-900'}`}>
                    {model.name}
                  </span>

                  {isSelected && (
                    <div className="ml-auto text-gray-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14m-7-7 7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty Footer */}
        <div className="p-4 mt-auto">
        </div>
      </div>

      {/* Main Content - Right Section */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Minimalist Header */}
        <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6 bg-white/80 backdrop-blur-sm z-10">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gradient-to-tr from-gray-800 to-gray-600 rounded flex items-center justify-center">
              <Sparkles size={12} className="text-white" />
            </div>
            <span className="font-semibold text-sm text-gray-800 tracking-tight">ChatLabs Interface</span>
          </div>
          <div className="flex gap-4 text-xs font-medium text-gray-400">
            <span className="hover:text-gray-600 cursor-pointer">Data Stream</span>
            <span className="text-gray-800 cursor-pointer">Analysis</span>
            <span className="hover:text-gray-600 cursor-pointer">Settings</span>
          </div>
        </div>

        {/* Visualization Area */}
        <div className="flex-1 relative flex items-center justify-center p-8">

          {/* Animated Background Flow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Generate multiple particles */}
            {[...Array(12)].map((_, i) => (
              <FloatingParticle
                key={i}
                delay={i * 0.5}
                color={selectedModel.color}
              />
            ))}

            {/* Soft Gradient Burst at bottom */}
            <div
              className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full blur-[100px] opacity-20 transition-colors duration-700"
              style={{ backgroundColor: selectedModel.color }}
            />
          </div>

          {/* Central Information Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 max-w-lg w-full"
            >
              {/* Connection Line to top */}
              <div className="absolute -top-12 left-1/2 w-px h-12 bg-gradient-to-b from-transparent to-gray-200" />

              <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8 relative overflow-hidden">
                {/* Decorative top accent */}
                <div
                  className="absolute top-0 left-0 w-full h-1 transition-colors duration-500"
                  style={{ backgroundColor: selectedModel.color }}
                />

                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">
                      {selectedModel.role}
                    </h3>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {selectedModel.name}
                    </h1>
                  </div>

                  <div
                    className="p-3 rounded-xl bg-gray-50 transition-colors duration-500"
                    style={{ color: selectedModel.color }}
                  >
                    <selectedModel.icon size={32} />
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    {selectedModel.description}
                  </p>

                  <div className="pt-4 mt-2 border-t border-gray-50 flex items-center gap-3">
                    <div className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-gray-600">
                      LIVE CONNECTION
                    </div>
                    <div className="text-xs text-gray-400 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Processing data stream
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Lines from bottom */}
              <div className="absolute -bottom-12 left-1/4 w-px h-12 bg-gradient-to-t from-transparent to-gray-200" />
              <div className="absolute -bottom-8 left-3/4 w-px h-8 bg-gradient-to-t from-transparent to-gray-200" />

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
