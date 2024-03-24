/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#fcb900',
      'secondary': '#ff6900',
      'accent': '#0693e3',
      'error': '#cf2e2e',
      'success': '#00d084',
      'warning': '#ffc82c',
      'neutral': '#000000',
      'base-100': '#ffffff',
    },
  },
  plugins: [require('flowbite/plugin')],
};
