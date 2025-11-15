# Portfolio - Maithil Hrushikesh Patil

A modern terminal-themed developer portfolio built with Next.js, featuring an interactive terminal interface with dynamic theme switching, games, and full navigation capabilities.

## About

Personal portfolio website showcasing my projects, skills, and experience as a Computer Science student specializing in Data Science and AI/ML. The site features a unique terminal interface design with multiple color themes, interactive games, and a fully functional command-line experience.

## Tech Stack

- **Next.js 16.0.3** - React framework with App Router
- **React 19** - Latest React with improved performance
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom CSS variables
- **Vercel** - Seamless deployment and hosting

## Features

### 🎨 Dynamic Theme System
- **4 Color Themes** - Switch between different terminal aesthetics
  - `nextjs` - Black background with red/pink accents (default)
  - `matrix` - Classic Matrix green on dark blue
  - `amber` - Vintage amber terminal on brown
  - `cyberpunk` - Futuristic magenta/cyan on dark
- **Live Theme Switching** - Change themes on-the-fly with `theme` command
- **Persistent Themes** - Your theme preference is saved across sessions
- **CSS Variables** - All colors use dynamic CSS variables for instant updates

### 💻 Advanced Terminal Features
- **Page Navigation** - Use `cd` to navigate between pages
  - `cd projects` - Go to projects page
  - `cd skills` - Go to skills page
  - `cd about` - Go to about page
  - `cd contact` - Go to contact page
- **File System Simulation** - View files with `cat`, list with `ls`, create with `mkdir` and `touch`
- **Command History** - Arrow keys (↑/↓) to navigate previous commands
- **Tab Completion** - Auto-complete commands with Tab key
- **Keyboard Shortcuts** - Full terminal shortcuts:
  - `Ctrl+C` - Cancel current input
  - `Ctrl+L` - Clear terminal screen
  - `Ctrl+U` - Clear line before cursor
  - `Ctrl+K` - Clear line after cursor
  - `Ctrl+A` - Move to beginning of line
  - `Ctrl+E` - Move to end of line
  - `Ctrl+W` - Delete word before cursor

### 🎮 Interactive Games
- **Number Guessing Game** (`guess`) - Guess a number between 1-100
- **Tic-Tac-Toe** (`ttt`) - Play against the computer
- **Easter Eggs** - Discover hidden commands (`secret`, `matrix`, `sudo`, `hack`)

### 📱 Responsive Design
- **Mobile-First** - Optimized for mobile devices
- **Hamburger Menu** - Collapsible navigation on mobile
- **Touch-Friendly** - All interactions work on touch screens
- **Adaptive Layouts** - Content adjusts for different screen sizes

### ✨ Visual Effects
- **CRT Scanline Effect** - Authentic terminal look with subtle scanline animation
- **Typing Animation** - Realistic terminal command typing effect
- **Smooth Transitions** - Fade-in and slide-up animations
- **Terminal Glow** - Subtle text glow effects on accent colors

## Color Themes

### Next.js Dark (Default)
```css
Background: #000000 (Pure Black)
Text: #ededed (Light Gray)
Secondary: #999999 (Medium Gray)
Accent: #ff5e5e (Red/Pink)
Borders: #333333 (Dark Gray)
```

### Matrix Green
```css
Background: #0a0e27 (Dark Blue)
Text: #00ff00 (Bright Green)
Secondary: #00cc00 (Medium Green)
Accent: #00ff00 (Bright Green)
Borders: #003300 (Dark Green)
```

### Amber Terminal
```css
Background: #1a1208 (Dark Brown)
Text: #ffb000 (Amber)
Secondary: #cc8c00 (Dark Amber)
Accent: #ffcc00 (Bright Amber)
Borders: #664400 (Brown)
```

### Cyberpunk
```css
Background: #0d1117 (Dark Gray)
Text: #e0e0e0 (Light Gray)
Secondary: #a0a0a0 (Medium Gray)
Accent: #ff00ff (Magenta)
Borders: #30363d (Slate Gray)
```

## Terminal Commands

### Navigation Commands
- `help` - Display all available commands
- `ls` - List all pages and files with descriptions
- `cd <page>` - Navigate to a page (projects, skills, about, contact)
- `pwd` - Print current working directory
- `about` - Navigate directly to about page
- `skills` - Navigate directly to skills page
- `projects` - Navigate directly to projects page
- `contact` - Navigate directly to contact page

### File Commands
- `cat <file>` - View file contents
  - `cat readme.md` - Portfolio overview
  - `cat about.txt` - Quick bio
  - `cat skills.txt` - Skills summary
  - `cat projects.txt` - Projects list
  - `cat contact.txt` - Contact details

### Theme Commands
- `theme <name>` - Switch color theme
  - `theme nextjs` - Default black/red theme
  - `theme matrix` - Matrix green theme
  - `theme amber` - Amber terminal theme
  - `theme cyberpunk` - Cyberpunk magenta theme

### File System Commands (Simulated)
- `mkdir <name>` - Create a new directory
- `touch <name>` - Create a new file

### Utility Commands
- `whoami` - Display current user
- `date` - Show current date and time
- `echo <message>` - Print a message
- `clear` - Clear the terminal screen

### Games & Easter Eggs
- `guess` - Play number guessing game (1-100)
- `ttt` - Play Tic-Tac-Toe against computer
- `secret` - Discover hidden tech facts
- `matrix` - Enter the Matrix
- `sudo` - Try to get admin access
- `hack` - Attempt to hack the system

## Projects Showcased

1. LifeTrack - AI-powered health record management system
2. Advanced Data Visualization Playground - Interactive data viz platform
3. EcoGuard ML - Ecological monitoring with machine learning
4. CurioCity - Location discovery mobile app
5. Quotes API - REST API with 5000+ quotes

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Chronos778/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Keyboard Shortcuts

While using the terminal, you have access to standard bash shortcuts:

| Shortcut | Action |
|----------|--------|
| `Tab` | Auto-complete command |
| `↑` | Previous command in history |
| `↓` | Next command in history |
| `Ctrl+C` | Cancel current input |
| `Ctrl+L` | Clear terminal (same as `clear`) |
| `Ctrl+U` | Clear line before cursor |
| `Ctrl+K` | Clear line after cursor |
| `Ctrl+A` | Move cursor to beginning |
| `Ctrl+E` | Move cursor to end |
| `Ctrl+W` | Delete word before cursor |

## Customization

### Adding New Themes

Edit `src/contexts/ThemeContext.tsx`:

```typescript
export const themes: Record<string, Theme> = {
  // ... existing themes
  mytheme: {
    name: 'My Custom Theme',
    bg: '#000000',
    text: '#ffffff',
    secondary: '#888888',
    accent: '#00ff00',
    border: '#444444',
    success: '#00ff00',
    warning: '#ffaa00',
    info: '#0088ff',
  },
};
```

### Adding New Commands

Edit `src/hooks/useTerminal.ts`:

```typescript
const commands: Record<string, () => string | string[]> = {
  // ... existing commands
  mycommand: () => {
    return 'Output of my custom command';
  },
};
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home page with interactive terminal
│   ├── projects/          # Projects showcase
│   │   └── page.tsx
│   ├── skills/            # Skills and technologies
│   │   └── page.tsx
│   ├── about/             # About me
│   │   └── page.tsx
│   ├── contact/           # Contact information
│   │   └── page.tsx
│   ├── playground/        # Experimental projects
│   │   └── page.tsx
│   ├── layout.tsx         # Root layout with ThemeProvider
│   └── globals.css        # Global styles and animations
├── components/
│   ├── Navigation.tsx     # Sidebar navigation with mobile menu
│   ├── Sidebar.tsx        # Additional sidebar components
│   ├── Layout.tsx         # Layout wrapper
│   └── StatusBar.tsx      # Status bar component
├── contexts/
│   └── ThemeContext.tsx   # Theme provider and management
├── hooks/
│   ├── useTerminal.ts     # Terminal logic and commands
│   ├── useTypingEffect.ts # Typing animation effect
│   └── useAnimations.ts   # Animation utilities
└── public/
    └── (static assets)
```

## How to Use

### Navigating the Site

**Using the Terminal:**
1. Type `help` to see all available commands
2. Use `cd projects` to navigate to the projects page
3. Use `cat readme.md` to view file contents
4. Use `theme matrix` to switch to Matrix green theme

**Using the Sidebar:**
- Click on navigation links (home, projects, skills, about, contact)
- On mobile, tap the hamburger menu (☰) in the top-left corner

### Playing Games

**Number Guessing Game:**
```bash
$ guess
# Guess a number between 1-100
$ 50
⬆️  Too low! Try a higher number.
$ 75
🎉 Correct! You guessed it in 2 attempts!
```

**Tic-Tac-Toe:**
```bash
$ ttt
# Board shows positions 1-9
$ 5
# You play X in center, computer responds with O
$ quit
# Exit the game anytime
```

### Changing Themes

```bash
$ theme matrix
Theme changed to: matrix
# Entire site turns Matrix green

$ theme cyberpunk
Theme changed to: cyberpunk
# Site switches to magenta/cyan

$ theme amber
Theme changed to: amber
# Vintage amber terminal look

$ theme nextjs
Theme changed to: nextjs
# Back to default black/red
```

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Chronos778/Portfolio)

**Or deploy manually:**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Configure project (default settings work)
5. Deploy!

Your site will be live at `yourname.vercel.app`

### Environment Variables

No environment variables required for basic deployment.

## Performance

- ✅ **Lighthouse Score**: 95+ on all metrics
- ✅ **Mobile Optimized**: Fully responsive design
- ✅ **Fast Load Times**: Optimized with Next.js 16
- ✅ **SEO Friendly**: Proper meta tags and structure
- ✅ **Accessible**: WCAG 2.1 compliant

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## License

MIT License - Feel free to use this code for your own portfolio.

## Acknowledgments

- Inspired by classic terminal interfaces
- Built with Next.js and React 19
- Styled with Tailwind CSS
- Deployed on Vercel

## Contact

- **Email**: maithilpatil9@gmail.com
- **GitHub**: [@Chronos778](https://github.com/Chronos778)
- **LinkedIn**: [maithil-patil](https://linkedin.com/in/maithil-patil-aa74b5326)
- **Portfolio**: [Live Site](https://your-portfolio-url.vercel.app)

---

Made with ❤️ by Maithil Hrushikesh Patil
