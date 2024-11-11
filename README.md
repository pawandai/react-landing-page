# React Assignment (Landing Page)

A modern React-based website built with TypeScript, Tailwind CSS, and Vite, featuring a clean, responsive design with reusable components, built-in and custom hooks, smooth scrolling, and a parallax effect for the hero section.

## File & Folder Structure

```bash
├── public/
│   ├── ...          # Public files
├── src/
│   ├── assets/              # Static assets like images and fonts
│   ├── components/          # Reusable UI components
│   │   ├── Hero.tsx         # Hero section component with parallax effect
│   │   ├── Navigation.tsx   # Navigation bar with active link highlighting
│   │   ├── MobileMenu.tsx   # Custom mobile menu component with escape key and outside click handling
│   │   └── CustomButton.tsx # Custom button component with variants
│   ├── hooks/               # Custom hooks
│   │   └── useOnScreen.ts   # Custom hook to detect if an element is in the viewport
│   ├── pages/               # Includes Whole pages
│   │   └── HomePage.tsx   
│   ├── App.tsx              # Main app component
│   ├── index.tsx            # Entry point for React
│   ├── index.css            # Global Styles
│   └── tailwind.config.ts   # Tailwind CSS configuration file
├── package.json             # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite build tool configuration
└── README.md                # This file
```

### Hero Section

- **Hero.tsx**: This component displays the hero section with a background image that moves based on scroll (parallax effect). It is designed to be fully responsive and adaptive for different screen sizes.

### Navigation Bar

- **Navigation.tsx**: A responsive navigation bar that sits below the hero section. It features smooth scrolling links to different sections of the page and highlights the active link with a bottom border. This component also supports mobile responsiveness with a menu toggle button.

## Reusable Components

### MobileMenu Component

- **MobileMenu.tsx**: A custom mobile menu component that can slide in from the right, left, top, or bottom. It features:
  - Escape key and outside click handling to close the mobileMenu.
  - Smooth transitions and flexible positioning.
  
### CustomButton Component

- **CustomButton.tsx**: A reusable button component with different variants (e.g., primary, secondary, with icons). It includes customizable props for color, size, and icon placement (left or right).

## Built-in & Custom Hooks

### `useOnScreen` Hook

- **useOnScreen.ts**: A custom hook that tracks if an element is in the viewport. It's used for animating different sections.

## Tailwind CSS

This project uses **Tailwind CSS** for utility-first styling. The following features are integrated:

- **Responsive Design**: Using Tailwind's responsive classes (e.g., `md:hidden`, `lg:flex`), the navigation bar and other components adapt to different screen sizes.
- **Animations**: Tailwind's utility classes such as `transition-transform` and `duration-300` enable smooth transitions for the `Sheet` component and other UI elements.

### Tailwind Configuration

The Tailwind configuration file (`tailwind.config.ts`) has been set up to include custom colors, spacing, and other utility classes to match your design preferences.

## See Live Demo

This project is deployed on Microsoft Azure [Live Demo](https://react-assignment-tau-mauve.vercel.app/).