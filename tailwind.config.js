module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "BNG-bot-o": "var(--BNG-bot-o-font-family)",
        "BNG-bot-o-02": "var(--BNG-bot-o-02-font-family)",
        "BNG-corpo-02": "var(--BNG-corpo-02-font-family)",
        "BNG-display-02": "var(--BNG-display-02-font-family)",
        "BNG-overline": "var(--BNG-overline-font-family)",
        "BNG-subt-tulo": "var(--BNG-subt-tulo-font-family)",
        "BNG-t-tulo-01-h1": "var(--BNG-t-tulo-01-h1-font-family)",
        "BNG-t-tulo-02-h2": "var(--BNG-t-tulo-02-h2-font-family)",
        "BNG-TIPOGRAFIA-BNG-corpo-02":
          "var(--BNG-TIPOGRAFIA-BNG-corpo-02-font-family)",
        "marca-o": "var(--marca-o-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { 
      center: true, 
      padding: "2rem", 
      screens: { 
        "sm": "100%",
        "md": "100%", 
        "lg": "100%",
        "xl": "100%",
        "2xl": "90%"
      } 
    },
  },
  plugins: [],
  darkMode: ["class"],
};
