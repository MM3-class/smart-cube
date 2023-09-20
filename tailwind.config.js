/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'primary': '#410DEB',
        'secondary': '#79E003',
        'title': '#020A05',
        'sub-title': '#2F3333A6',
        'bg-color': '#F6F9F9',
        'head-line': '#040503',
      },
    },
  },
  plugins: [],
}

