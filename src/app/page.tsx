'use client';

import Navigation from '@/components/Navigation';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useTerminal } from '@/hooks/useTerminal';
import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const { displayedText: command } = useTypingEffect('$ cat README.md', 50);
  const [showContent, setShowContent] = useState(false);
  const { setTheme } = useTheme();
  const { history, input, setInput, handleSubmit, handleKeyDown, inputRef } = useTerminal({
    onThemeChange: setTheme,
  });
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-terminal text-terminal font-mono relative overflow-hidden">
      {/* CRT Scanline Effect */}
      <div className="pointer-events-none absolute inset-0 z-50 bg-scanline opacity-5"></div>
      
      <Navigation />
      
      <main className="flex-1 overflow-auto p-4 md:p-8 pt-16 md:pt-8">
        <div className="max-w-4xl mx-auto">
          {/* Terminal Prompt */}
          <div className="mb-6 md:mb-8 animate-fade-in">
            <div className="text-xs md:text-sm mb-4 text-terminal-accent">{command}<span className="animate-blink">_</span></div>
            {showContent && (
              <div className="border-l-4 border-terminal-accent pl-4 md:pl-6 py-2 animate-slide-up">
                <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-terminal">
                  &gt; Maithil Hrushikesh Patil
                </h1>
                <p className="text-base md:text-xl text-terminal-secondary mb-2 md:mb-4">
                  Computer Science Student | Data Science | AI/ML Developer
                </p>
                <p className="text-xs md:text-sm text-terminal-secondary opacity-60">
                  St. John College of Engineering and Management | Virar West, Mumbai
                </p>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          {showContent && (
            <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-terminal-darker border border-terminal p-3 md:p-4 hover:border-terminal-accent transition-all">
                <div className="text-xl md:text-2xl font-bold text-terminal-accent">5+</div>
                <div className="text-[10px] md:text-xs text-terminal-secondary mt-1">Projects</div>
              </div>
              <div className="bg-terminal-darker border border-terminal p-3 md:p-4 hover:border-terminal-accent transition-all">
                <div className="text-xl md:text-2xl font-bold" style={{color: 'var(--terminal-success)'}}>200+</div>
                <div className="text-[10px] md:text-xs text-terminal-secondary mt-1">Commits</div>
              </div>
              <div className="bg-terminal-darker border border-terminal p-3 md:p-4 hover:border-terminal-accent transition-all">
                <div className="text-xl md:text-2xl font-bold" style={{color: 'var(--terminal-info)'}}>1+ Year</div>
                <div className="text-[10px] md:text-xs text-terminal-secondary mt-1">Experience</div>
              </div>
            </div>
          )}

          {/* Featured Projects */}
          {showContent && (
            <div className="bg-terminal-darker border-2 border-terminal p-4 md:p-6 mb-6 md:mb-8 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="text-xs md:text-sm mb-4 text-terminal-accent">$ cat ~/projects/featured.txt</div>
            <div className="space-y-4 text-xs md:text-sm">
              <div className="border-l-2 border-terminal-accent pl-3 md:pl-4 hover:bg-terminal-lighter transition-all">
                <div className="text-terminal-accent font-bold mb-1">1. LifeTrack</div>
                <div className="text-terminal-secondary mb-1">AI-powered health record management system</div>
                <div className="text-terminal-secondary opacity-60 text-[10px] md:text-xs">
                  Tech: React Native, Flask, TensorFlow
                </div>
              </div>
              
              <div className="border-l-2 border-terminal-accent pl-3 md:pl-4 hover:bg-terminal-lighter transition-all">
                <div className="text-terminal-accent font-bold mb-1">2. Data Visualization Playground</div>
                <div className="text-terminal-secondary mb-1">Interactive charts and analytics platform</div>
                <div className="text-terminal-secondary opacity-60 text-[10px] md:text-xs">
                  Tech: React, D3.js, Python, Pandas
                </div>
              </div>
              
              <div className="border-l-2 border-terminal-accent pl-3 md:pl-4 hover:bg-terminal-lighter transition-all">
                <div className="text-terminal-accent font-bold mb-1">3. EcoGuard ML</div>
                <div className="text-terminal-secondary mb-1">Wildlife monitoring with machine learning</div>
                <div className="text-terminal-secondary opacity-60 text-[10px] md:text-xs">
                  Tech: Python, TensorFlow, OpenCV
                </div>
              </div>
              
              <div className="border-l-2 border-terminal-accent pl-3 md:pl-4 hover:bg-terminal-lighter transition-all">
                <div className="text-terminal-accent font-bold mb-1">4. CurioCity</div>
                <div className="text-terminal-secondary mb-1">Location-based discovery mobile app</div>
                <div className="text-terminal-secondary opacity-60 text-[10px] md:text-xs">
                  Tech: React Native, Express.js, MongoDB
                </div>
              </div>
              
              <div className="border-l-2 border-terminal-accent pl-3 md:pl-4 hover:bg-terminal-lighter transition-all">
                <div className="text-terminal-accent font-bold mb-1">5. Quotes API</div>
                <div className="text-terminal-secondary mb-1">REST API with 10,000+ curated quotes</div>
                <div className="text-terminal-secondary opacity-60 text-[10px] md:text-xs">
                  Tech: Node.js, Express, PostgreSQL
                </div>
              </div>
            </div>
          </div>
          )}

          {/* Interactive Terminal */}
          {showContent && (
            <div className="bg-terminal-darker border-2 border-terminal p-4 md:p-6 mb-6 md:mb-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="text-xs md:text-sm mb-2 text-terminal-accent">$ Interactive Terminal (try typing "help")</div>
              
              {/* Terminal Output */}
              <div className="mb-4 max-h-40 md:max-h-60 overflow-y-auto">
                {history.map((line, index) => (
                  <div
                    key={index}
                    className={`text-xs md:text-sm ${
                      line.type === 'command'
                        ? 'text-terminal font-bold'
                        : line.type === 'error'
                        ? 'text-terminal-accent'
                        : 'text-terminal-secondary'
                    } break-words`}
                  >
                    {line.text}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Input */}
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <span className="text-terminal-secondary text-xs md:text-sm">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-terminal placeholder:text-terminal-secondary placeholder:opacity-40 text-xs md:text-sm"
                  placeholder="Type a command..."
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            </div>
          )}

          {/* Command Line */}
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <span className="text-terminal-secondary">user@portfolio:~$</span>
            <span className="animate-pulse text-terminal-accent">_</span>
          </div>
        </div>
      </main>
    </div>
  );
}
