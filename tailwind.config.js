module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        secondary: '#406aff',
        accent: '#00ff99',
      },
      backgroundImage: {
        preloader: "url('./assets/preloader-bg.jpg')",
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.jpg')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
