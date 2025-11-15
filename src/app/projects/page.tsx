'use client';

import Navigation from '@/components/Navigation';

const projects = [
  {
    name: 'LifeTrack',
    description: 'AI-powered personal health record management system with voice-to-text entry and Gemini AI insights',
    tech: ['React', 'Flask', 'Google Gemini AI', 'SQLite', 'Capacitor'],
    github: 'https://github.com/Chronos778/LifeTrack',
    stars: '3⭐',
  },
  {
    name: 'Advanced Data Visualization Playground',
    description: 'Interactive data viz platform with AI insights, drag-and-drop dashboards, and 10+ chart types',
    tech: ['React', 'Material-UI', 'Recharts', 'Chart.js', 'Gemini AI'],
    github: 'https://github.com/Chronos778/advanced-data-visualization-playground',
    stars: '4⭐',
  },
  {
    name: 'EcoGuard ML',
    description: 'AI-powered ecological monitoring system using ML models for wildlife population predictions',
    tech: ['Python', 'Streamlit', 'TensorFlow', 'XGBoost', 'LightGBM'],
    github: 'https://github.com/Chronos778/EcoGuard-ML',
    stars: '3⭐',
  },
  {
    name: 'CurioCity',
    description: 'Location discovery mobile app with GPS-based detection and 7+ live API integrations',
    tech: ['React Native', 'Expo', 'NewsData.io', 'OpenTripMap', 'Foursquare'],
    github: 'https://github.com/Chronos778/CurioCity',
    stars: '2⭐',
  },
  {
    name: 'Quotes API',
    description: 'REST API serving 5000+ inspirational quotes with SVG image generation and protected endpoints',
    tech: ['Node.js', 'Express.js', 'Vercel'],
    github: 'https://github.com/Chronos778/quotes_api',
    live: 'https://quotes-api-ruddy.vercel.app',
    stars: '3⭐',
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-[#ededed] font-mono">
      <Navigation />
      
      <main className="flex-1 overflow-auto p-4 md:p-8 pt-16 md:pt-8">
        <div className="max-w-4xl mx-auto">
          {/* Command Header */}
          <div className="mb-6">
            <div className="text-sm mb-2 text-[#ff5e5e]">$ ls -la ~/projects</div>
            <div className="text-[#999999]">total {projects.length} repositories</div>
          </div>

          {/* Projects List */}
          <div className="space-y-4">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-[#0a0a0a] border-2 border-[#333333] p-6 hover:border-[#ff5e5e] transition-colors">
                {/* Project Name */}
                <div className="text-xl font-bold mb-2 flex items-center justify-between">
                  <div>
                    <span className="text-[#ff5e5e]">▸</span> {project.name}
                  </div>
                  {project.stars && (
                    <span className="text-sm text-[#999999]">{project.stars}</span>
                  )}
                </div>

                {/* Description */}
                <div className="text-[#999999] mb-4 pl-4">
                  {project.description}
                </div>

                {/* Tech Stack */}
                <div className="pl-4 mb-3 text-sm">
                  <span className="text-[#666666]">Tech:</span>{' '}
                  <span className="text-[#999999]">{project.tech.join(' • ')}</span>
                </div>

                {/* Links */}
                <div className="pl-4 flex gap-6 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff5e5e] hover:underline flex items-center gap-2"
                  >
                    → GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ff5e5e] hover:underline flex items-center gap-2"
                    >
                      → Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Profile Link */}
          <div className="mt-8 p-6 bg-[#0a0a0a] border-2 border-[#333333]">
            <div className="text-sm mb-2 text-[#ff5e5e]">$ cat .github/profile</div>
            <div className="text-[#999999]">
              View all my work on{' '}
              <a
                href="https://github.com/Chronos778"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff5e5e] underline hover:text-[#ededed]"
              >
                GitHub @Chronos778
              </a>
            </div>
          </div>

          {/* Command Line */}
          <div className="mt-6 flex items-center gap-2 text-sm">
            <span className="text-[#999999]">user@portfolio:~/projects$</span>
            <span className="animate-pulse text-[#ff5e5e]">_</span>
          </div>
        </div>
      </main>
    </div>
  );
}
