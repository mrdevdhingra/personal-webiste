module.exports = {
    content: ['./*.html', './**/*.html', './**/*.js'],
    darkMode: 'media', // or remove this line if you don't need dark mode support
    theme: {
      extend: {
        fontSize: {
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
          },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  