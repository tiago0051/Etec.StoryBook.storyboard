const {
  scopedPreflightStyles,
  isolateInsideOfContainer,
} = require("tailwindcss-scoped-preflight");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "eteg-",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        lato: "lato",
      },
      colors: {
        border: "hsl(var(--eteg-border))",
        input: "hsl(var(--eteg-input))",
        ring: "hsl(var(--eteg-ring))",
        background: "hsl(var(--eteg-background))",
        foreground: "hsl(var(--eteg-foreground))",
        primary: {
          DEFAULT: "hsl(var(--eteg-primary))",
          foreground: "hsl(var(--eteg-primary-foreground))",
          hover: "hsl(var(--eteg-primary-hover))",
        },
        secondary: {
          DEFAULT: "hsl(var(--eteg-secondary))",
          foreground: "hsl(var(--eteg-secondary-foreground))",
          hover: "hsl(var(--eteg-secondary-hover))",
        },
        destructive: {
          DEFAULT: "hsl(var(--eteg-destructive))",
          foreground: "hsl(var(--eteg-destructive-foreground))",
          hover: "hsl(var(--eteg-destructive-hover))",
        },
        muted: {
          DEFAULT: "hsl(var(--eteg-muted))",
          foreground: "hsl(var(--eteg-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--eteg-accent))",
          foreground: "hsl(var(--eteg-accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--eteg-popover))",
          foreground: "hsl(var(--eteg-popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--eteg-card))",
          foreground: "hsl(var(--eteg-card-foreground))",
        },
        badge: {
          DEFAULT: "hsl(var(--eteg-badge))",
          foreground: "hsl(var(--eteg-badge-foreground))",
        },
        table: {
          line: "hsl(var(--eteg-table-line))",
          dropdown: "hsl(var(--eteg-table-dropdown))",
        },
      },
      borderRadius: {
        lg: "var(--eteg-radius)",
        md: "calc(var(--eteg-radius) - 2px)",
        sm: "calc(var(--eteg-radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--eteg-radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--eteg-radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer(".twp"),
    }),
  ],
};
