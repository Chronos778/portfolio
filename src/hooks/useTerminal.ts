'use client';

import { useState, useRef, KeyboardEvent } from 'react';

export interface TerminalLine {
  type: 'command' | 'output' | 'error';
  text: string;
}

export function useTerminal() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', text: 'Welcome to My Portfolio Terminal v1.0' },
    { type: 'output', text: 'Type "help" for available commands' },
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Record<string, () => string | string[]> = {
    help: () => [
      'Available commands:',
      '  help       - Show this help message',
      '  about      - Learn about me',
      '  skills     - View my tech skills',
      '  projects   - List my projects',
      '  contact    - Get contact information',
      '  clear      - Clear the terminal',
      '  ls         - List directory contents',
      '  whoami     - Display current user',
      '  date       - Show current date and time',
      '  echo       - Print a message',
      '  secret     - Find the hidden easter egg',
    ],
    about: () => [
      'Maithil Hrushikesh Patil',
      'Computer Science Student | Data Science | AI/ML Developer',
      'St. John College of Engineering and Management',
      'Passionate about building data-driven applications',
    ],
    skills: () => [
      'Languages: Java, Python, C/C++, JavaScript',
      'Frameworks: React, React Native, Flask, Express.js',
      'AI/ML: TensorFlow, Pandas, Data Science',
      'Tools: Git, VS Code, Linux (Arch)',
    ],
    projects: () => [
      '1. LifeTrack - AI-powered health records',
      '2. Data Visualization Playground - Interactive charts',
      '3. EcoGuard ML - Wildlife monitoring system',
      '4. CurioCity - Location discovery app',
      '5. Quotes API - REST API with 5000+ quotes',
    ],
    contact: () => [
      'Email: maithilpatil9@gmail.com',
      'Phone: +91 9370533275',
      'GitHub: github.com/Chronos778',
      'LinkedIn: linkedin.com/in/maithil-patil-aa74b5326',
    ],
    ls: () => [
      'drwxr-xr-x  projects/',
      'drwxr-xr-x  skills/',
      'drwxr-xr-x  about/',
      'drwxr-xr-x  contact/',
      'drwxr-xr-x  playground/',
      '-rw-r--r--  README.md',
      '-rw-r--r--  resume.pdf',
    ],
    whoami: () => 'maithil@portfolio',
    date: () => new Date().toString(),
    secret: () => [
      'SECRET DISCOVERED!',
      '================================',
      'Interesting Tech Facts:',
      '- The first computer bug was an actual moth found in a computer in 1947',
      '- Python was named after Monty Python, not the snake',
      '- The first 1GB hard drive weighed over 500 pounds and cost $40,000',
      '- Linux powers over 90% of all cloud infrastructure',
      '- Git was created by Linus Torvalds in just 10 days',
      '- The average web page is now larger than the entire Doom game',
      '- JavaScript was created in just 10 days by Brendan Eich',
      '- More than 90% of the world\'s currency exists only in digital form',
      '================================',
      'Thanks for exploring!',
    ],
    matrix: () => [
      '===================================',
      'Wake up, Neo... The Matrix has you...',
      'Follow the white rabbit.',
      '===================================',
    ],
    sudo: () => [
      'Nice try!',
      'sudo: you are not in the sudoers file. This incident will be reported.',
    ],
    hack: () => [
      'ACCESS DENIED',
      'Initiating countermeasures...',
      'Just kidding! But nice try, hacker!',
    ],
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory: TerminalLine[] = [
      ...history,
      { type: 'command', text: `$ ${cmd}` },
    ];

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmedCmd === '') {
      setHistory(newHistory);
      return;
    }

    // Handle echo command
    if (trimmedCmd.startsWith('echo ')) {
      const message = cmd.substring(5);
      newHistory.push({ type: 'output', text: message });
      setHistory(newHistory);
      return;
    }

    // Execute command
    const commandKey = trimmedCmd.split(' ')[0];
    const commandFn = commands[commandKey];

    if (commandFn) {
      const result = commandFn();
      const output = Array.isArray(result) ? result : [result];
      output.forEach((line) => {
        newHistory.push({ type: 'output', text: line });
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not found: ${commandKey}. Type "help" for available commands.`,
      });
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setCommandHistory(prev => [...prev, input]);
      executeCommand(input);
      setInput('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const inputElement = e.currentTarget;
    
    // Arrow Up - Previous command
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
        setTimeout(() => {
          inputElement.selectionStart = inputElement.selectionEnd = commandHistory[newIndex].length;
        }, 0);
      }
    }
    
    // Arrow Down - Next command
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
          setTimeout(() => {
            inputElement.selectionStart = inputElement.selectionEnd = commandHistory[newIndex].length;
          }, 0);
        }
      }
    }

    // Ctrl+L - Clear terminal
    if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      setHistory([]);
    }

    // Ctrl+C - Cancel current input
    if (e.ctrlKey && e.key === 'c') {
      e.preventDefault();
      setHistory(prev => [...prev, { type: 'command', text: `$ ${input}^C` }]);
      setInput('');
    }

    // Ctrl+U - Clear line before cursor
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      const cursorPos = inputElement.selectionStart || 0;
      setInput(input.substring(cursorPos));
      setTimeout(() => {
        inputElement.selectionStart = inputElement.selectionEnd = 0;
      }, 0);
    }

    // Ctrl+K - Clear line after cursor
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      const cursorPos = inputElement.selectionStart || 0;
      setInput(input.substring(0, cursorPos));
    }

    // Ctrl+A - Move to beginning
    if (e.ctrlKey && e.key === 'a') {
      e.preventDefault();
      inputElement.selectionStart = inputElement.selectionEnd = 0;
    }

    // Ctrl+E - Move to end
    if (e.ctrlKey && e.key === 'e') {
      e.preventDefault();
      inputElement.selectionStart = inputElement.selectionEnd = input.length;
    }

    // Ctrl+W - Delete word before cursor
    if (e.ctrlKey && e.key === 'w') {
      e.preventDefault();
      const cursorPos = inputElement.selectionStart || 0;
      const beforeCursor = input.substring(0, cursorPos);
      const afterCursor = input.substring(cursorPos);
      const lastSpaceIndex = beforeCursor.trimEnd().lastIndexOf(' ');
      const newInput = (lastSpaceIndex === -1 ? '' : beforeCursor.substring(0, lastSpaceIndex + 1)) + afterCursor;
      setInput(newInput);
      setTimeout(() => {
        const newPos = lastSpaceIndex === -1 ? 0 : lastSpaceIndex + 1;
        inputElement.selectionStart = inputElement.selectionEnd = newPos;
      }, 0);
    }

    // Tab - Auto-complete
    if (e.key === 'Tab') {
      e.preventDefault();
      const matches = Object.keys(commands).filter(cmd => cmd.startsWith(input.toLowerCase()));
      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        setHistory(prev => [
          ...prev,
          { type: 'output', text: matches.join('  ') }
        ]);
      }
    }
  };

  return {
    history,
    input,
    setInput,
    handleSubmit,
    handleKeyDown,
    inputRef,
  };
}
