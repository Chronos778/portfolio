'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const links = [
    { label: 'home', href: '/', icon: '~' },
    { label: 'projects', href: '/projects', icon: 'λ' },
    { label: 'skills', href: '/skills', icon: '◆' },
    { label: 'about', href: '/about', icon: '→' },
    { label: 'contact', href: '/contact', icon: '@' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-terminal-darker border border-terminal p-2 rounded text-terminal-accent"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navigation Sidebar */}
      <nav className={`
        fixed md:relative
        w-64 md:w-48
        bg-terminal border-r border-terminal p-4 
        overflow-y-auto flex flex-col
        h-full
        z-40
        transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
      {/* Header */}
      <div className="mb-6 pb-4 border-b border-terminal">
        <div className="text-terminal text-sm font-bold">
          <div className="text-terminal-accent">$ whoami</div>
          <div className="text-terminal-secondary mt-1">maithil@portfolio</div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="space-y-2 flex-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`block px-3 py-2 text-sm transition-all ${
              isActive(link.href)
                ? 'bg-terminal-lighter text-terminal-accent border-l-2 border-terminal-accent'
                : 'text-terminal-secondary hover:bg-terminal-lighter'
            }`}
          >
            <span className="mr-2">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-terminal text-xs text-terminal-secondary">
        <div className="mb-2 text-terminal-secondary opacity-60">--- SYSTEM INFO ---</div>
        <div className="space-y-1 text-terminal-secondary">
          <div><span className="text-terminal-accent">●</span> status: active</div>
          <div>role: student dev</div>
          <div>location: 🇮🇳 Mumbai</div>
        </div>
        
        {/* Social Links */}
        <div className="mt-4 pt-3 border-t border-terminal">
          <div className="mb-2 text-terminal-secondary opacity-60">--- CONNECT ---</div>
          <div className="space-y-2">
            <a
              href="https://github.com/Chronos778"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-terminal-secondary hover:text-terminal-accent transition-colors"
            >
              <span>→</span>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/maithil-patil-aa74b5326"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-terminal-secondary hover:text-terminal-accent transition-colors"
            >
              <span>→</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:maithilpatil9@gmail.com"
              className="flex items-center gap-2 text-terminal-secondary hover:text-terminal-accent transition-colors"
            >
              <span>→</span>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
