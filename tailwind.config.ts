import type { Config } from "tailwindcss"
// import { SKILLSHETRA_THEMES } from "@/common/constants/tailwind/colors"
// import { SKILLSHETRA_MEDIA_QUERY_BREAKPOINTS } from "@/common/constants/tailwind/mediaQueries"

const SKILLSHETRA_MEDIA_QUERY_BREAKPOINTS = {
  'sm': '500px',
  'md': '750px',
  'lg': '1000px',
  'xl': '1280px',
  '2xl': '1550px',
  '3xl': '1800px'
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: SKILLSHETRA_MEDIA_QUERY_BREAKPOINTS,
    extend: {
      backgroundImage: {
      },
    },
  },
  plugins: [],
}

export default config
