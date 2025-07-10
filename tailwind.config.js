/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        accent: '#FF9800', 
        background: '#FAFAFA',
        textPrimary: '#333333',
        links: '#2196F3',
        error: '#F44336',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(255, 152, 0, 0.1) 100%)",
        'feature-gradient': "linear-gradient(145deg, rgba(76, 175, 80, 0.05) 0%, rgba(33, 150, 243, 0.05) 100%)",
      },
    },
  },
  plugins: [],
};