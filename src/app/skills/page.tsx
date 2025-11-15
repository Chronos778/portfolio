'use client';

import Navigation from '@/components/Navigation';

const skillCategories = [
  {
    category: 'LANGUAGES',
    skills: ['Java', 'Python', 'C', 'C++', 'JavaScript'],
  },
  {
    category: 'FRAMEWORKS',
    skills: ['React', 'React Native', 'Flask', 'Express.js', 'TensorFlow'],
  },
  {
    category: 'TECHNOLOGIES',
    skills: ['REST API', 'CORS', 'Expo', 'Pandas', 'Plotly'],
  },
  {
    category: 'DEVELOPER_TOOLS',
    skills: ['Git', 'VS Code', 'Vercel', 'GitHub'],
  },
  {
    category: 'OPERATING_SYSTEMS',
    skills: ['Linux (Arch, Omarchy)', 'Windows'],
  },
  {
    category: 'COURSEWORK',
    skills: ['Data Fundamentals', 'DBMS', 'Data Science', 'Getting Started with Data'],
  },
];

export default function Skills() {
  return (
    <div className="flex h-screen bg-black text-[#ededed] font-mono">
      <Navigation />
      
      <main className="flex-1 overflow-auto p-8">
        <div className="max-w-4xl">
          {/* Command Header */}
          <div className="mb-6">
            <div className="text-sm text-[#ff5e5e]">$ tree ~/skills -L 2</div>
          </div>

          {/* Skills Tree */}
          <div className="space-y-6">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="bg-[#0a0a0a] border-2 border-[#333333] p-6">
                <div className="text-xl font-bold mb-4 text-[#ff5e5e]">
                  ▸ {category.category}/
                </div>
                <div className="pl-4 space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="text-[#999999]">
                      {skillIdx === category.skills.length - 1 ? '└─' : '├─'} {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Command Line */}
          <div className="mt-6 flex items-center gap-2 text-sm">
            <span className="text-[#999999]">user@portfolio:~/skills$</span>
            <span className="animate-pulse text-[#ff5e5e]">_</span>
          </div>
        </div>
      </main>
    </div>
  );
}
