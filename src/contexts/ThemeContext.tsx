'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Theme {
  name: string;
  bg: string;
  text: string;
  secondary: string;
  accent: string;
  border: string;
  success: string;
  warning: string;
  info: string;
}

export const themes: Record<string, Theme> = {
  nextjs: {
    name: 'Next.js Dark',
    bg: '#000000',
    text: '#ededed',
    secondary: '#999999',
    accent: '#ff5e5e',
    border: '#333333',
    success: '#3fb950',
    warning: '#ffa657',
    info: '#58a6ff',
  },
  matrix: {
    name: 'Matrix Green',
    bg: '#0a0e27',
    text: '#00ff00',
    secondary: '#00cc00',
    accent: '#00ff00',
    border: '#003300',
    success: '#00ff00',
    warning: '#ffff00',
    info: '#00ccff',
  },
  amber: {
    name: 'Amber Terminal',
    bg: '#1a1208',
    text: '#ffb000',
    secondary: '#cc8c00',
    accent: '#ffcc00',
    border: '#664400',
    success: '#00ff00',
    warning: '#ff6600',
    info: '#00ccff',
  },
  cyberpunk: {
    name: 'Cyberpunk',
    bg: '#0d1117',
    text: '#e0e0e0',
    secondary: '#a0a0a0',
    accent: '#ff00ff',
    border: '#30363d',
    success: '#00ff9f',
    warning: '#ffff00',
    info: '#00d9ff',
  },
};

interface ThemeContextType {
  currentTheme: string;
  theme: Theme;
  setTheme: (themeName: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState('nextjs');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const theme = themes[currentTheme];
    document.documentElement.style.setProperty('--terminal-bg', theme.bg);
    document.documentElement.style.setProperty('--terminal-fg', theme.text);
    document.documentElement.style.setProperty('--terminal-secondary', theme.secondary);
    document.documentElement.style.setProperty('--terminal-accent', theme.accent);
    document.documentElement.style.setProperty('--terminal-border', theme.border);
    document.documentElement.style.setProperty('--terminal-success', theme.success);
    document.documentElement.style.setProperty('--terminal-warning', theme.warning);
    document.documentElement.style.setProperty('--terminal-error', theme.info);
  }, [currentTheme]);

  const setTheme = (themeName: string) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem('portfolio-theme', themeName);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, theme: themes[currentTheme], setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
