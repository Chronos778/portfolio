'use client';

import { useState, useRef, KeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';

export interface TerminalLine {
  type: 'command' | 'output' | 'error';
  text: string;
}

interface UseTerminalOptions {
  onThemeChange?: (theme: string) => void;
}

export function useTerminal(options?: UseTerminalOptions) {
  const router = useRouter();
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', text: 'Welcome to My Portfolio Terminal v1.0' },
    { type: 'output', text: 'Type "help" for available commands' },
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // File system simulation
  const [currentDir, setCurrentDir] = useState('~');
  const [fileSystem, setFileSystem] = useState<Record<string, string[]>>({
    '~': ['projects', 'skills', 'about', 'contact', 'playground', 'README.md', 'resume.pdf'],
    '~/projects': ['LifeTrack.md', 'DataViz.md', 'EcoGuard.md', 'CurioCity.md', 'QuotesAPI.md'],
    '~/skills': ['languages.txt', 'frameworks.txt', 'tools.txt'],
    '~/about': ['bio.txt', 'education.txt'],
    '~/contact': ['email.txt', 'phone.txt', 'social.txt'],
  });
  
  // Game states
  const [gameActive, setGameActive] = useState<string | null>(null);
  const [snakeGame, setSnakeGame] = useState<any>(null);
  const [ticTacToeGame, setTicTacToeGame] = useState<any>(null);
  const [guessGame, setGuessGame] = useState<{ target: number; attempts: number } | null>(null);

  const commands: Record<string, () => string | string[]> = {
    help: () => [
      'Available commands:',
      '  help       - Show this help message',
      '  ls         - List files and directories',
      '  cd <dir>   - Navigate to page (projects, skills, about, contact)',
      '  cat <file> - View file contents (readme.md, skills.txt, etc.)',
      '  pwd        - Print working directory',
      '  about      - Navigate to about page',
      '  skills     - Navigate to skills page',
      '  projects   - Navigate to projects page',
      '  contact    - Navigate to contact page',
      '  theme <t>  - Change theme (matrix, amber, cyberpunk, nextjs)',
      '  clear      - Clear terminal screen',
      '  mkdir <d>  - Create directory (simulated)',
      '  touch <f>  - Create file (simulated)',
      '  whoami     - Display current user',
      '  date       - Show current date and time',
      '  echo <msg> - Print a message',
      '  guess      - Play number guessing game',
      '  ttt        - Play Tic-Tac-Toe',
      '  secret     - Discover easter eggs',
    ],
    about: () => {
      router.push('/about');
      return 'Navigating to /about...';
    },
    skills: () => {
      router.push('/skills');
      return 'Navigating to /skills...';
    },
    projects: () => {
      router.push('/projects');
      return 'Navigating to /projects...';
    },
    contact: () => {
      router.push('/contact');
      return 'Navigating to /contact...';
    },
    ls: () => {
      return [
        'drwxr-xr-x  projects/     → View my projects (cd projects)',
        'drwxr-xr-x  skills/       → Technical skills (cd skills)',
        'drwxr-xr-x  about/        → About me (cd about)',
        'drwxr-xr-x  contact/      → Contact info (cd contact)',
        'drwxr-xr-x  playground/   → Experimental work',
        '-rw-r--r--  README.md     → Portfolio overview (cat readme.md)',
        '-rw-r--r--  about.txt     → Quick bio (cat about.txt)',
        '-rw-r--r--  skills.txt    → Skills list (cat skills.txt)',
        '-rw-r--r--  projects.txt  → Projects list (cat projects.txt)',
        '-rw-r--r--  contact.txt   → Contact details (cat contact.txt)',
      ];
    },
    pwd: () => currentDir,
    cd: () => 'Use: cd <directory>',
    cat: () => 'Use: cat <filename>',
    mkdir: () => 'Use: mkdir <directory>',
    touch: () => 'Use: touch <filename>',
    whoami: () => 'maithil@portfolio',
    date: () => new Date().toString(),
    theme: () => [
      'Available themes:',
      '  theme nextjs     - Next.js Dark (default)',
      '  theme matrix     - Matrix Green',
      '  theme amber      - Amber Terminal',
      '  theme cyberpunk  - Cyberpunk',
    ],
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
    snake: () => [
      '🐍 SNAKE GAME',
      '================================',
      'Coming soon! Use arrow keys to play.',
      'Eat apples, avoid walls and yourself!',
      '================================',
    ],
    ttt: () => {
      const board = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
      setTicTacToeGame({ board, player: 'X' });
      setGameActive('ttt');
      return [
        '❌⭕ TIC-TAC-TOE',
        '================================',
        ' 1 | 2 | 3',
        '-----------',
        ' 4 | 5 | 6',
        '-----------',
        ' 7 | 8 | 9',
        '================================',
        'You are X. Enter a number (1-9) to play.',
        'Type "quit" to exit.',
      ];
    },
    guess: () => {
      const target = Math.floor(Math.random() * 100) + 1;
      setGuessGame({ target, attempts: 0 });
      setGameActive('guess');
      return [
        '🎲 NUMBER GUESSING GAME',
        '================================',
        'I\'m thinking of a number between 1-100.',
        'Type your guess to play!',
        'Type "quit" to exit the game.',
        '================================',
      ];
    },
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    const newHistory: TerminalLine[] = [
      ...history,
      { type: 'command', text: `$ ${cmd}` },
    ];

    if (trimmedCmd.toLowerCase() === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmedCmd === '') {
      setHistory(newHistory);
      return;
    }

    // Handle game input
    if (gameActive === 'guess') {
      if (trimmedCmd.toLowerCase() === 'quit') {
        setGameActive(null);
        setGuessGame(null);
        newHistory.push({ type: 'output', text: 'Game ended. Thanks for playing!' });
        setHistory(newHistory);
        return;
      }
      
      const guess = parseInt(trimmedCmd);
      if (isNaN(guess)) {
        newHistory.push({ type: 'error', text: 'Please enter a valid number or "quit" to exit.' });
        setHistory(newHistory);
        return;
      }
      
      if (guessGame) {
        const newAttempts = guessGame.attempts + 1;
        if (guess === guessGame.target) {
          newHistory.push({ 
            type: 'output', 
            text: `🎉 Correct! You guessed it in ${newAttempts} attempts!` 
          });
          setGameActive(null);
          setGuessGame(null);
        } else if (guess < guessGame.target) {
          newHistory.push({ type: 'output', text: '⬆️  Too low! Try a higher number.' });
          setGuessGame({ ...guessGame, attempts: newAttempts });
        } else {
          newHistory.push({ type: 'output', text: '⬇️  Too high! Try a lower number.' });
          setGuessGame({ ...guessGame, attempts: newAttempts });
        }
        setHistory(newHistory);
        return;
      }
    }

    if (gameActive === 'ttt') {
      if (trimmedCmd.toLowerCase() === 'quit') {
        setGameActive(null);
        setTicTacToeGame(null);
        newHistory.push({ type: 'output', text: 'Game ended. Thanks for playing!' });
        setHistory(newHistory);
        return;
      }

      const pos = parseInt(trimmedCmd);
      if (isNaN(pos) || pos < 1 || pos > 9) {
        newHistory.push({ type: 'error', text: 'Please enter a number 1-9 or "quit".' });
        setHistory(newHistory);
        return;
      }

      if (ticTacToeGame) {
        const board = [...ticTacToeGame.board];
        const index = pos - 1;
        
        if (board[index] === 'X' || board[index] === 'O') {
          newHistory.push({ type: 'error', text: 'That position is already taken!' });
          setHistory(newHistory);
          return;
        }

        // Player move
        board[index] = 'X';
        
        // Check win
        const winPatterns = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
          [0, 4, 8], [2, 4, 6] // diagonals
        ];
        
        const checkWin = (b: string[], player: string) => {
          return winPatterns.some(pattern => 
            pattern.every(i => b[i] === player)
          );
        };
        
        if (checkWin(board, 'X')) {
          const boardLines = formatBoard(board);
          boardLines.forEach(line => newHistory.push({ type: 'output', text: line }));
          newHistory.push({ type: 'output', text: '🎉 You win!' });
          setGameActive(null);
          setTicTacToeGame(null);
          setHistory(newHistory);
          return;
        }
        
        // Check draw
        if (board.every(cell => cell === 'X' || cell === 'O')) {
          const boardLines = formatBoard(board);
          boardLines.forEach(line => newHistory.push({ type: 'output', text: line }));
          newHistory.push({ type: 'output', text: '🤝 It\'s a draw!' });
          setGameActive(null);
          setTicTacToeGame(null);
          setHistory(newHistory);
          return;
        }
        
        // Computer move (random available position)
        const available = board.map((cell, i) => cell !== 'X' && cell !== 'O' ? i : -1).filter(i => i >= 0);
        if (available.length > 0) {
          const compMove = available[Math.floor(Math.random() * available.length)];
          board[compMove] = 'O';
          
          if (checkWin(board, 'O')) {
            const boardLines = formatBoard(board);
            boardLines.forEach(line => newHistory.push({ type: 'output', text: line }));
            newHistory.push({ type: 'output', text: '🤖 Computer wins!' });
            setGameActive(null);
            setTicTacToeGame(null);
            setHistory(newHistory);
            return;
          }
          
          if (board.every(cell => cell === 'X' || cell === 'O')) {
            const boardLines = formatBoard(board);
            boardLines.forEach(line => newHistory.push({ type: 'output', text: line }));
            newHistory.push({ type: 'output', text: '🤝 It\'s a draw!' });
            setGameActive(null);
            setTicTacToeGame(null);
            setHistory(newHistory);
            return;
          }
        }
        
        const boardLines = formatBoard(board);
        boardLines.forEach(line => newHistory.push({ type: 'output', text: line }));
        setTicTacToeGame({ board, player: 'X' });
        setHistory(newHistory);
        return;
      }
    }

    // Helper function to format tic-tac-toe board
    function formatBoard(board: string[]): string[] {
      return [
        '================================',
        ` ${board[0]} | ${board[1]} | ${board[2]}`,
        '-----------',
        ` ${board[3]} | ${board[4]} | ${board[5]}`,
        '-----------',
        ` ${board[6]} | ${board[7]} | ${board[8]}`,
        '================================',
      ];
    }

    // Handle echo command
    if (trimmedCmd.toLowerCase().startsWith('echo ')) {
      const message = cmd.substring(5);
      newHistory.push({ type: 'output', text: message });
      setHistory(newHistory);
      return;
    }

    // Handle theme command
    if (trimmedCmd.toLowerCase().startsWith('theme ')) {
      const themeName = trimmedCmd.substring(6).trim();
      const validThemes = ['nextjs', 'matrix', 'amber', 'cyberpunk'];
      if (validThemes.includes(themeName)) {
        options?.onThemeChange?.(themeName);
        newHistory.push({ type: 'output', text: `Theme changed to: ${themeName}` });
      } else {
        newHistory.push({ type: 'error', text: `Invalid theme: ${themeName}. Use 'theme' to see available themes.` });
      }
      setHistory(newHistory);
      return;
    }

    // Handle cd command
    if (trimmedCmd.toLowerCase().startsWith('cd ')) {
      const dirName = trimmedCmd.substring(3).trim().toLowerCase();
      
      // Map directories to routes
      const routeMap: Record<string, string> = {
        'home': '/',
        '~': '/',
        'projects': '/projects',
        'skills': '/skills',
        'about': '/about',
        'contact': '/contact',
        'playground': '/playground',
      };
      
      if (dirName === '..') {
        router.push('/');
        newHistory.push({ type: 'output', text: 'Navigating to home...' });
      } else if (routeMap[dirName]) {
        router.push(routeMap[dirName]);
        newHistory.push({ type: 'output', text: `Navigating to ${routeMap[dirName]}...` });
      } else {
        // Use old file system logic for non-route directories
        if (currentDir !== '~') {
          const parts = currentDir.split('/');
          parts.pop();
          setCurrentDir(parts.join('/') || '~');
          newHistory.push({ type: 'output', text: `Changed to ${parts.join('/') || '~'}` });
        } else {
          newHistory.push({ type: 'error', text: `cd: no such directory: ${dirName}` });
        }
      }
      setHistory(newHistory);
      return;
    }

    // Handle cat command
    if (trimmedCmd.toLowerCase().startsWith('cat ')) {
      const fileName = trimmedCmd.substring(4).trim().toLowerCase();
      const fileContents: Record<string, string[]> = {
        'readme.md': [
          '# Maithil Hrushikesh Patil',
          'Computer Science Student | AI/ML Developer',
          '',
          'Welcome to my portfolio! Explore my projects, skills, and background.',
          'Use the navigation menu or type commands to learn more.',
          '',
          'Commands: about, skills, projects, contact',
        ],
        'about.txt': [
          'Name: Maithil Hrushikesh Patil',
          'Education: St. John College of Engineering and Management',
          'Major: Computer Science',
          'Focus: Data Science, AI/ML Development',
          '',
          'Type "cd about" or "about" to learn more.',
        ],
        'skills.txt': [
          'TECHNICAL SKILLS:',
          '================',
          'Languages: Java, Python, C/C++, JavaScript',
          'Frameworks: React, React Native, Flask, Express.js',
          'AI/ML: TensorFlow, Pandas, Data Science',
          'Tools: Git, VS Code, Linux (Arch)',
          '',
          'Type "cd skills" or "skills" to view details.',
        ],
        'projects.txt': [
          'MY PROJECTS:',
          '===========',
          '1. LifeTrack - AI-powered health records system',
          '2. Data Visualization - Interactive charts & analytics',
          '3. EcoGuard ML - Wildlife monitoring with ML',
          '4. CurioCity - Location-based discovery app',
          '5. Quotes API - REST API with 5000+ quotes',
          '',
          'Type "cd projects" or "projects" to explore.',
        ],
        'contact.txt': [
          'CONTACT INFORMATION:',
          '===================',
          'Email: maithilpatil9@gmail.com',
          'Phone: +91 9370533275',
          'GitHub: github.com/Chronos778',
          'LinkedIn: linkedin.com/in/maithil-patil-aa74b5326',
          '',
          'Type "cd contact" or "contact" for details.',
        ],
        'resume.pdf': ['[Binary file - cannot display]', 'Download from: /downloads/resume.pdf'],
      };
      
      if (fileContents[fileName]) {
        fileContents[fileName].forEach(line => {
          newHistory.push({ type: 'output', text: line });
        });
      } else if (fileSystem[currentDir]?.includes(fileName)) {
        newHistory.push({ type: 'output', text: `[File content: ${fileName}]` });
      } else {
        newHistory.push({ type: 'error', text: `cat: ${fileName}: No such file or directory` });
      }
      setHistory(newHistory);
      return;
    }

    // Handle mkdir command
    if (trimmedCmd.toLowerCase().startsWith('mkdir ')) {
      const dirName = trimmedCmd.substring(6).trim();
      if (fileSystem[currentDir]?.includes(dirName + '/')) {
        newHistory.push({ type: 'error', text: `mkdir: ${dirName}: Directory already exists` });
      } else {
        const newDir = currentDir === '~' ? `~/${dirName}` : `${currentDir}/${dirName}`;
        setFileSystem(prev => ({
          ...prev,
          [currentDir]: [...(prev[currentDir] || []), dirName + '/'],
          [newDir]: [],
        }));
        newHistory.push({ type: 'output', text: `Created directory: ${dirName}` });
      }
      setHistory(newHistory);
      return;
    }

    // Handle touch command
    if (trimmedCmd.toLowerCase().startsWith('touch ')) {
      const fileName = trimmedCmd.substring(6).trim();
      if (fileSystem[currentDir]?.includes(fileName)) {
        newHistory.push({ type: 'error', text: `touch: ${fileName}: File already exists` });
      } else {
        setFileSystem(prev => ({
          ...prev,
          [currentDir]: [...(prev[currentDir] || []), fileName],
        }));
        newHistory.push({ type: 'output', text: `Created file: ${fileName}` });
      }
      setHistory(newHistory);
      return;
    }

    // Execute command
    const commandKey = trimmedCmd.toLowerCase().split(' ')[0];
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
