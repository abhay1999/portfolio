# Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Responsive design for all devices
- Dark/light mode support
- Smooth animations and transitions
- Single-page layout with scroll navigation
- Interactive UI elements

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: [React Type Animation](https://www.npmjs.com/package/react-type-animation)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Theme Switching**: [Next-Themes](https://github.com/pacocoursey/next-themes)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/                # Next.js app directory
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── ui/             # UI components (Navbar, Footer, etc.)
│   └── sections/       # Page sections (About, Experience, etc.)
├── public/             # Static files
│   └── images/         # Image assets
├── tailwind.config.js  # Tailwind CSS configuration
└── next.config.js      # Next.js configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import the project to Vercel
3. Deploy

## License

MIT 