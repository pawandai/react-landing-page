/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        neomorph: "10px 10px 15px #d1d9e6, -10px -10px 15px #ffffff",
        inner: "inset 10px 10px 15px #d1d9e6, inset -10px -10px 15px #ffffff",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-6deg)",
          },
          "50%": {
            transform: "rotate(6deg)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(60px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "blob-bounce": {
          "0%": {
            transform: "translate(-100%, -100%) translate3d(0, 0, 0)",
          },

          "25%": {
            transform: "translate(-100%, -100%) translate3d(100%, 0, 0)",
          },

          "50%": {
            transform: "translate(-100%, -100%) translate3d(100%, 100%, 0)",
          },

          "75%": {
            transform: "translate(-100%, -100%) translate3d(0, 100%, 0)",
          },

          "100%": {
            transform: "translate(-100%, -100%) translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.3s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease-out forwards",
        slideUp: "slideUp 0.8s ease-out forwards",
        slideRight: "slideRight 0.8s ease-out forwards",
        slideLeft: "slideLeft 0.8s ease-out forwards",
        "blob-bounce": "blob-bounce 5s infinite ease",

        bounceSlow: "bounce 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
