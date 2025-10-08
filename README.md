# AI Screen - Terminal Kiosk Application

A Next.js application designed for terminal screens with 9:16 aspect ratio, featuring AI-powered photo generation capabilities.

## Features

- **Fullscreen API Integration**: Automatically enters fullscreen mode for optimal terminal display
- **9:16 Aspect Ratio**: Optimized for vertical terminal screens
- **FSD Architecture**: Feature-Sliced Design for scalable and maintainable code
- **Module CSS**: Scoped styling with CSS modules
- **Camera Integration**: Built-in camera functionality for photo capture
- **Responsive Design**: Mobile-first approach with terminal-specific optimizations

## Project Structure 

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   └── page.tsx           # Main page component
├── shared/                # Shared utilities and configurations
│   ├── config/           # CSS variables and configurations
│   │   ├── colors.css    # Color palette
│   │   ├── typography.css # Typography settings
│   │   └── spacing.css   # Spacing and sizing
│   └── lib/              # Shared utilities
│       └── fullscreen.ts # Fullscreen API wrapper
├── widgets/              # Reusable UI components
│   ├── layout/           # Layout components
│   ├── header/           # Header component
│   └── photo-section/    # Photo capture section
└── entities/             # Business entities (future)
└── features/             # Feature-specific components (future)
└── pages/                # Page components (future)
```

## Design System

### Colors

- Primary: `#C3FF00` (Lime Green)
- Background: `#000000` (Black)
- Surface: `#161616` (Dark Gray)
- Text Primary: `#FFFFFF` (White)
- Text Secondary: `rgba(255, 255, 255, 0.6)` (Semi-transparent White)

### Typography

- Primary Font: SF Pro Display
- Secondary Font: Roboto Flex
- Responsive font sizes with consistent line heights

### Spacing

- Consistent spacing scale from 4px to 256px
- Terminal-optimized aspect ratio (9:16)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Fullscreen API

The application automatically enters fullscreen mode when loaded. The FullscreenManager utility provides:

- `enterFullscreen()`: Enter fullscreen mode
- `exitFullscreen()`: Exit fullscreen mode
- `toggleFullscreen()`: Toggle fullscreen state
- `isFullscreen()`: Check current fullscreen state
- Event listeners for fullscreen changes

## Camera Features

- Automatic camera access request
- Photo capture with canvas rendering
- User-friendly interface for photo selection
- Fallback option to continue without photo

## Browser Support

- Modern browsers with Fullscreen API support
- Camera access requires HTTPS in production
- Responsive design for various screen sizes

## Development

- TypeScript for type safety
- ESLint and Prettier for code quality
- CSS Modules for scoped styling
- Next.js 15 with App Router

## License

Private project - All rights reserved
