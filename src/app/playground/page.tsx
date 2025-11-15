'use client';

import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Play } from 'lucide-react';

interface Experiment {
  id: string;
  title: string;
  description: string;
  type: 'ml' | 'ui' | 'component' | 'visualization';
  icon: string;
  status: 'completed' | 'in-progress' | 'experimental';
  tech: string[];
}

const experiments: Experiment[] = [
  {
    id: 'sentiment-analysis',
    title: 'Real-time Sentiment Analysis',
    description: 'NLP model that analyzes text sentiment in real-time with 92% accuracy',
    type: 'ml',
    icon: '💭',
    status: 'completed',
    tech: ['Python', 'TensorFlow', 'FastAPI'],
  },
  {
    id: 'animated-ui',
    title: 'Animated UI Components',
    description: 'Library of smooth, accessible React components with Framer Motion',
    type: 'component',
    icon: '✨',
    status: 'completed',
    tech: ['React', 'TypeScript', 'Framer Motion'],
  },
  {
    id: 'data-viz',
    title: 'Interactive Data Visualization',
    description: 'Visualize complex datasets with D3.js and three.js integration',
    type: 'visualization',
    icon: '📈',
    status: 'completed',
    tech: ['D3.js', 'Three.js', 'React'],
  },
  {
    id: 'image-classifier',
    title: 'Image Classifier Model',
    description: 'Custom CNN model for image classification with web interface',
    type: 'ml',
    icon: '🖼️',
    status: 'in-progress',
    tech: ['PyTorch', 'Next.js', 'WebGL'],
  },
  {
    id: 'ui-kit',
    title: 'Design System UI Kit',
    description: 'Comprehensive component library with Storybook integration',
    type: 'component',
    icon: '🎨',
    status: 'completed',
    tech: ['React', 'Tailwind CSS', 'Storybook'],
  },
  {
    id: 'ml-playground',
    title: 'ML Model Playground',
    description: 'Interactive tool to experiment with different ML algorithms in browser',
    type: 'ml',
    icon: '⚙️',
    status: 'experimental',
    tech: ['TensorFlow.js', 'React', 'Canvas API'],
  },
  {
    id: 'text-gen',
    title: 'AI Text Generator',
    description: 'Fine-tuned LLM for creative writing and code generation',
    type: 'ml',
    icon: '✍️',
    status: 'in-progress',
    tech: ['Python', 'Hugging Face', 'FastAPI'],
  },
  {
    id: 'mobile-game',
    title: 'Mobile Game Demo',
    description: 'React Native game showcasing physics and animations',
    type: 'component',
    icon: '🎮',
    status: 'experimental',
    tech: ['React Native', 'TypeScript', 'Reanimated'],
  },
];

const typeColors = {
  ml: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
  ui: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
  component: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
  visualization: 'from-orange-500/20 to-yellow-500/20 border-orange-500/30',
};

const statusColors = {
  completed: { bg: 'bg-[#3fb950]/20', text: 'text-[#3fb950]', dot: 'bg-[#3fb950]' },
  'in-progress': { bg: 'bg-[#58a6ff]/20', text: 'text-[#58a6ff]', dot: 'bg-[#58a6ff]' },
  experimental: { bg: 'bg-[#ffa657]/20', text: 'text-[#ffa657]', dot: 'bg-[#ffa657]' },
};

export default function Playground() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredExperiments = selectedType
    ? experiments.filter((exp) => exp.type === selectedType)
    : experiments;

  return (
    <Layout>
      <div className="w-full h-full bg-black overflow-auto">
        <div className="max-w-7xl mx-auto p-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-[#ededed] mb-3 font-sans">Playground</h1>
            <p className="text-[#999999] font-mono">Experiments, mini projects, and wild ideas</p>
          </div>

          {/* Type Filters */}
          <div className="flex gap-3 mb-12 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedType(null)}
              className={`px-6 py-2 rounded-lg font-mono text-sm whitespace-nowrap transition-all ${
                selectedType === null
                  ? 'bg-[#ff5e5e] text-black'
                  : 'bg-[#1a1a1a] text-[#999999] hover:bg-[#0a0a0a] border border-[#333333]'
              }`}
            >
              All
            </button>
            {['ml', 'ui', 'component', 'visualization'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2 rounded-lg font-mono text-sm whitespace-nowrap transition-all capitalize ${
                  selectedType === type
                    ? 'bg-[#ff5e5e] text-black'
                    : 'bg-[#1a1a1a] text-[#999999] hover:bg-[#0a0a0a] border border-[#333333]'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Experiments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperiments.map((experiment) => (
              <div
                key={experiment.id}
                className="bg-[#0a0a0a] border border-[#333333] rounded-lg p-6 hover:border-[#ff5e5e] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff5e5e]/10 cursor-pointer group transform hover:-translate-y-1"
              >
                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl group-hover:scale-110 transition-transform">{experiment.icon}</span>
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono ${statusColors[experiment.status].bg} ${statusColors[experiment.status].text}`}>
                    <div className={`w-2 h-2 rounded-full ${statusColors[experiment.status].dot}`} />
                    <span className="capitalize">{experiment.status.replace('-', ' ')}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#ededed] mb-2 group-hover:text-[#ff5e5e] transition-colors">
                  {experiment.title}
                </h3>
                <p className="text-sm text-[#999999] mb-4 line-clamp-2">{experiment.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {experiment.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-[#1a1a1a] text-[#999999] border border-[#333333] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Play Button */}
                <button className="mt-4 w-full py-2 rounded bg-[#ff5e5e]/20 hover:bg-[#ff5e5e]/30 border border-[#ff5e5e]/30 hover:border-[#ff5e5e] text-[#ff5e5e] text-sm font-mono transition-all flex items-center justify-center gap-2">
                  <Play size={14} />
                  Try It Out
                </button>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#0a0a0a] border border-[#333333] rounded-lg p-6">
              <p className="text-[#999999] text-sm mb-2">Total Experiments</p>
              <p className="text-3xl font-bold text-[#ff5e5e]">{experiments.length}</p>
            </div>
            <div className="bg-[#0a0a0a] border border-[#333333] rounded-lg p-6">
              <p className="text-[#999999] text-sm mb-2">Completed</p>
              <p className="text-3xl font-bold text-[#3fb950]">{experiments.filter((e) => e.status === 'completed').length}</p>
            </div>
            <div className="bg-[#0a0a0a] border border-[#333333] rounded-lg p-6">
              <p className="text-[#999999] text-sm mb-2">In Progress</p>
              <p className="text-3xl font-bold text-[#58a6ff]">{experiments.filter((e) => e.status === 'in-progress').length}</p>
            </div>
            <div className="bg-[#0a0a0a] border border-[#333333] rounded-lg p-6">
              <p className="text-[#999999] text-sm mb-2">Experimental</p>
              <p className="text-3xl font-bold text-[#ffa657]">{experiments.filter((e) => e.status === 'experimental').length}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
