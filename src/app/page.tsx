'use client';

import Navigation from '@/components/Navigation';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useTerminal } from '@/hooks/useTerminal';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const { displayedText: command } = useTypingEffect('$ cat README.md', 50);
  const [showContent, setShowContent] = useState(false);
  const { history, input, setInput, handleSubmit, handleKeyDown, inputRef } = useTerminal();
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="flex h-screen bg-black text-[#ededed] font-mono relative overflow-hidden">
      {/* CRT Scanline Effect */}
      <div className="pointer-events-none absolute inset-0 z-50 bg-scanline opacity-5"></div>
      
      <Navigation />
      
      <main className="flex-1 overflow-auto p-8">
        <div className="max-w-4xl">
          {/* Terminal Prompt */}
          <div className="mb-8 animate-fade-in">
            <div className="text-sm mb-4 text-[#ff5e5e]">{command}<span className="animate-blink">_</span></div>
            {showContent && (
              <div className="border-l-4 border-[#ff5e5e] pl-6 py-2 animate-slide-up">
                <h1 className="text-5xl font-bold mb-4 text-[#ededed]">
                  &gt; Maithil Hrushikesh Patil
                </h1>
                <p className="text-xl text-[#999999] mb-4">
                  Computer Science Student | Data Science | AI/ML Developer
                </p>
                <p className="text-sm text-[#666666]">
                  St. John College of Engineering and Management | Virar West, Mumbai
                </p>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          {showContent && (
            <div className="grid grid-cols-3 gap-4 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-[#0a0a0a] border border-[#333333] p-4 hover:border-[#ff5e5e] transition-all">
                <div className="text-2xl font-bold text-[#ff5e5e]">5+</div>
                <div className="text-xs text-[#999999] mt-1">Projects Built</div>
              </div>
              <div className="bg-[#0a0a0a] border border-[#333333] p-4 hover:border-[#ff5e5e] transition-all">
                <div className="text-2xl font-bold text-[#3fb950]">200+</div>
                <div className="text-xs text-[#999999] mt-1">GitHub Commits</div>
              </div>
              <div className="bg-[#0a0a0a] border border-[#333333] p-4 hover:border-[#ff5e5e] transition-all">
                <div className="text-2xl font-bold text-[#58a6ff]">1+ Year</div>
                <div className="text-xs text-[#999999] mt-1">Experience</div>
              </div>
            </div>
          )}

          {/* Tech Stack Display */}
          {showContent && (
            <div className="bg-[#0a0a0a] border-2 border-[#333333] p-6 mb-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="text-sm mb-4 text-[#ff5e5e]">$ ls -la ~/tech-stack/</div>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <div className="text-[#ff5e5e] mb-2">▸ LANGUAGES/</div>
                <div className="pl-4 text-[#999999] space-y-1">
                  <div>├─ Java</div>
                  <div>├─ Python</div>
                  <div>├─ C/C++</div>
                  <div>└─ JavaScript</div>
                </div>
              </div>
              <div>
                <div className="text-[#ff5e5e] mb-2">▸ FRAMEWORKS/</div>
                <div className="pl-4 text-[#999999] space-y-1">
                  <div>├─ React</div>
                  <div>├─ React Native</div>
                  <div>├─ Flask</div>
                  <div>└─ Express.js</div>
                </div>
              </div>
              <div>
                <div className="text-[#ff5e5e] mb-2">▸ AI_ML/</div>
                <div className="pl-4 text-[#999999] space-y-1">
                  <div>├─ TensorFlow</div>
                  <div>├─ Pandas</div>
                  <div>└─ Data Science</div>
                </div>
              </div>
              <div>
                <div className="text-[#ff5e5e] mb-2">▸ TOOLS/</div>
                <div className="pl-4 text-[#999999] space-y-1">
                  <div>├─ Git</div>
                  <div>├─ VS Code</div>
                  <div>└─ Linux (Arch)</div>
                </div>
              </div>
            </div>
          </div>
          )}

          {/* Interactive Terminal */}
          {showContent && (
            <div className="bg-[#0a0a0a] border-2 border-[#333333] p-6 mb-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="text-sm mb-2 text-[#ff5e5e]">$ Interactive Terminal (try typing "help")</div>
              
              {/* Terminal Output */}
              <div className="mb-4 max-h-60 overflow-y-auto">
                {history.map((line, index) => (
                  <div
                    key={index}
                    className={`text-sm ${
                      line.type === 'command'
                        ? 'text-[#ededed] font-bold'
                        : line.type === 'error'
                        ? 'text-[#ff5e5e]'
                        : 'text-[#999999]'
                    }`}
                  >
                    {line.text}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Input */}
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <span className="text-[#999999]">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-[#ededed] placeholder:text-[#666666]"
                  placeholder="Type a command... (try Tab, Ctrl+C, Arrow keys)"
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            </div>
          )}

          {/* Command Line */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#999999]">user@portfolio:~$</span>
            <span className="animate-pulse text-[#ff5e5e]">_</span>
          </div>
        </div>
      </main>
    </div>
  );
}
