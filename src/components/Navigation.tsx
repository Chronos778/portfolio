'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const links = [
    { label: 'home', href: '/', icon: '~' },
    { label: 'projects', href: '/projects', icon: 'λ' },
    { label: 'skills', href: '/skills', icon: '◆' },
    { label: 'about', href: '/about', icon: '→' },
    { label: 'contact', href: '/contact', icon: '@' },
  ];

  return (
    <nav className="w-48 bg-black border-r border-[#333333] p-4 overflow-y-auto flex flex-col">
      {/* Header */}
      <div className="mb-6 pb-4 border-b border-[#333333]">
        <div className="text-[#ededed] text-sm font-bold">
          <div className="text-[#ff5e5e]">$ whoami</div>
          <div className="text-[#999999] mt-1">maithil@portfolio</div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="space-y-2 flex-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-3 py-2 text-sm transition-all ${
              isActive(link.href)
                ? 'bg-[#1a1a1a] text-[#ff5e5e] border-l-2 border-[#ff5e5e]'
                : 'text-[#999999] hover:bg-[#0a0a0a]'
            }`}
          >
            <span className="mr-2">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-[#333333] text-xs text-[#999999]">
        <div className="mb-2 text-[#666666]">--- SYSTEM INFO ---</div>
        <div className="space-y-1 text-[#999999]">
          <div><span className="text-[#ff5e5e]">●</span> status: active</div>
          <div>role: student dev</div>
          <div>location: 🇮🇳 Mumbai</div>
        </div>
        
        {/* Social Links */}
        <div className="mt-4 pt-3 border-t border-[#333333]">
          <div className="mb-2 text-[#666666]">--- CONNECT ---</div>
          <div className="space-y-2">
            <a
              href="https://github.com/Chronos778"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#999999] hover:text-[#ff5e5e] transition-colors"
            >
              <span>→</span>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/maithil-patil-aa74b5326"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#999999] hover:text-[#ff5e5e] transition-colors"
            >
              <span>→</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:maithilpatil9@gmail.com"
              className="flex items-center gap-2 text-[#999999] hover:text-[#ff5e5e] transition-colors"
            >
              <span>→</span>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
