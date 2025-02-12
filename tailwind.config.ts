import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        Gothic: ['Gothic', 'sans-serif'],
        Caslon: ['Caslon', 'serif'],
        
      },

      fontWeight: {
        light: '300',
        regular: '400',
        ultrabold: '800',
        thin: '100',
        extralight: '200',
        semibold: '600',

      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold:'#F2BB1D',
        navColor:'#121212',
        navBorder:'#292929',
        menuBg:'#171717'
      },
    },
  },
  plugins: [],
} satisfies Config;
