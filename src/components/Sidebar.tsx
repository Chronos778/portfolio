'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FolderOpen, Zap, Lightbulb, User, Mail } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/projects', icon: FolderOpen, label: 'Projects' },
    { href: '/skills', icon: Zap, label: 'Skills' },
    { href: '/playground', icon: Lightbulb, label: 'Playground' },
    { href: '/about', icon: User, label: 'About' },
    { href: '/contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <div className="w-64 bg-black border-r border-[#333333] flex flex-col p-6 overflow-y-auto">
      {/* Logo/Title */}
      <div className="mb-8">
        <h1 className="text-xl font-bold text-[#ff5e5e] font-mono">{'<Builder />'}</h1>
        <p className="text-xs text-[#666666] mt-1">studio v1.0</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-[#1a1a1a] text-[#ff5e5e] border border-[#ff5e5e]/30'
                  : 'text-[#999999] hover:text-[#ededed] hover:bg-[#0a0a0a]'
              }`}
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-[#333333] pt-4">
        <p className="text-xs text-[#666666] text-center">
          Made with {'<3'} & Code
        </p>
      </div>
    </div>
  );
}
