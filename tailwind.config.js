module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#6A1B9A',      // Purple
          secondary: '#FFEB3B',    // Yellow for better contrast with purple
          accent: '#03A9F4',       // Light Blue to complement purple and yellow
          neutral: '#3D4451',      // Neutral color for text and background balance
          'base-100': '#F5F5F5',   // Light Gray for a soft background, easier on the eyes than pure white
          info: '#2196F3',         // Blue for informational elements
          success: '#4CAF50',      // Green for success messages
          warning: '#FB8C00',      // Orange for warnings
          error: '#F44336',        // Red for errors
        },
      },
    ],
  },
};
