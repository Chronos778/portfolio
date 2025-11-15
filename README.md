# Portfolio - Maithil Hrushikesh Patil

A modern terminal-themed developer portfolio built with Next.js, featuring a sleek Next.js error terminal aesthetic with black background and red/pink accents.

## About

Personal portfolio website showcasing my projects, skills, and experience as a Computer Science student specializing in Data Science. The site features a unique terminal interface design inspired by Next.js error terminals with smooth animations and interactive elements.

## Tech Stack

- Next.js 16.0.3
- React 19
- TypeScript
- Tailwind CSS
- Vercel (deployment)

## Features

### Design & UI
- **Next.js Dark Theme** - Black background with red/pink accents and light gray text
- **CRT Scanline Effect** - Authentic terminal look with subtle scanline animation
- **Typing Animation** - Realistic terminal command typing effect
- **Smooth Transitions** - Fade-in and slide-up animations for content
- **Responsive Design** - Works seamlessly on all devices

### Interactive Terminal
- **Command Execution** - Fully functional terminal with real commands
- **Command History** - Arrow keys to navigate previous commands
- **Tab Completion** - Auto-complete commands with Tab key
- **Keyboard Shortcuts** - Full terminal shortcuts (Ctrl+C, Ctrl+L, Ctrl+U, Ctrl+K, Ctrl+A, Ctrl+E, Ctrl+W)
- **Easter Eggs** - Hidden commands and tech facts (try `secret`, `matrix`, `sudo`, `hack`)
- **Real-time Feedback** - Immediate command execution and output

### Content Sections
- **Terminal-style Navigation** - Sidebar with active state indicators
- **Quick Stats Dashboard** - Projects count, GitHub commits, and experience metrics
- **Project Showcase** - 5+ featured projects with GitHub integration
- **Skills Display** - Tech stack organized in terminal tree structure
- **Interactive Contact Form** - Command-based interface
- **Social Links** - GitHub, LinkedIn, and email integration
- **Playground** - Experimental projects and mini demos

## Color Palette

```css
Background: #000000 (Pure Black)
Text: #ededed (Light Gray)
Secondary: #999999 (Medium Gray)
Accent: #ff5e5e (Red/Pink)
Borders: #333333 (Dark Gray)
Success: #3fb950 (Green)
Warning: #ffa657 (Orange)
Info: #58a6ff (Blue)
```

## Terminal Commands

Try these commands in the interactive terminal:
- `help` - Display all available commands
- `about` - Learn about me
- `skills` - View technical skills
- `projects` - List featured projects
- `contact` - Get contact information
- `ls` - List directory contents
- `whoami` - Display current user
- `date` - Show current date and time
- `echo [message]` - Print a message
- `clear` - Clear the terminal
- `secret` - Discover hidden tech facts
- Plus more easter eggs to find!

## Projects Showcased

1. LifeTrack - AI-powered health record management system
2. Advanced Data Visualization Playground - Interactive data viz platform
3. EcoGuard ML - Ecological monitoring with machine learning
4. CurioCity - Location discovery mobile app
5. Quotes API - REST API with 5000+ quotes

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects showcase
│   ├── skills/            # Skills and technologies
│   ├── about/             # About me
│   ├── contact/           # Contact form
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   └── Navigation.tsx     # Sidebar navigation
└── public/
    └── resume.pdf         # Downloadable resume
```

## Contact

- Email: maithilpatil9@gmail.com
- GitHub: [Chronos778](https://github.com/Chronos778)
- LinkedIn: [maithil-patil](https://linkedin.com/in/maithil-patil-aa74b5326)

## License

MIT License - Feel free to use this code for your own portfolio.

## Deployment

Deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Chronos778/Portfolio)

Or deploy manually:
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy with default settings
4. Your site will be live at yourname.vercel.app
