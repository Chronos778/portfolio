'use client';

import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <div className="flex h-screen bg-black text-[#ededed] font-mono">
      <Navigation />
      
      <main className="flex-1 overflow-auto p-8">
        <div className="max-w-4xl">
          {/* Command Header */}
          <div className="mb-6">
            <div className="text-sm text-[#ff5e5e]">$ cat ~/about/README.md</div>
          </div>

          {/* About Content */}
          <div className="bg-[#0a0a0a] border-2 border-[#333333] p-8 space-y-6">
            <div>
              <div className="text-2xl font-bold mb-4 text-[#ff5e5e]"># About Me</div>
              <div className="text-[#999999] leading-relaxed">
                I'm Maithil Hrushikesh Patil, a Computer Science student specializing in 
                Data Science at St. John College of Engineering and Management, Mumbai. 
                Passionate about building data-driven applications and AI-powered solutions 
                that solve real-world problems.
              </div>
            </div>

            <div>
              <div className="text-xl font-bold mb-3 text-[#ff5e5e]">## Education</div>
              <div className="text-[#999999] space-y-2">
                <div>▸ B.Tech in Computer Science and Engineering (Data Science)</div>
                <div>▸ St. John College of Engineering and Management</div>
                <div>▸ Aug 2024 – May 2028 | Palghar, Maharashtra</div>
              </div>
            </div>

            <div>
              <div className="text-xl font-bold mb-3 text-[#ff5e5e]">## What I Do</div>
              <div className="text-[#999999] space-y-2">
                <div>▸ Participate in hackathons (Minithon, Techthon, Trae AI Hackathon)</div>
                <div>▸ Build AI/ML-powered web and mobile applications</div>
                <div>▸ Develop REST APIs and data visualization tools</div>
                <div>▸ Lead team projects and collaborative development</div>
              </div>
            </div>

            <div>
              <div className="text-xl font-bold mb-3 text-[#ff5e5e]">## Currently Learning</div>
              <div className="text-[#999999] space-y-2">
                <div>→ Advanced Machine Learning with TensorFlow</div>
                <div>→ Data Science fundamentals and DBMS</div>
                <div>→ Full-stack development with modern frameworks</div>
              </div>
            </div>

            <div>
              <div className="text-xl font-bold mb-3 text-[#ff5e5e]">## Download Resume</div>
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="inline-block text-[#ff5e5e] hover:underline"
              >
                → resume.pdf
              </a>
            </div>
          </div>

          {/* Command Line */}
          <div className="mt-6 flex items-center gap-2 text-sm">
            <span className="text-[#999999]">user@portfolio:~/about$</span>
            <span className="animate-pulse text-[#ff5e5e]">_</span>
          </div>
        </div>
      </main>
    </div>
  );
}
