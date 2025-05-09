// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        firacode: ['var(--font-fira-code)', 'monospace'],
      },
    },
  },
  plugins: [],
};
