tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#f1c40f',    // Yellow
        secondary: '#3498db',  // Blue
        'yellow-100': '#FFEDC1',
        primaryBlack: "#3A3A3A",
        pink: "#EA5052",
        sky: "#32B2BD",
        blue: "#3380C2",
        textgray: "#474143",
        blueGray: "#3380C21A",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['PT Sans', 'sans-serif']
      },
      borderRadius: {
        'custom': '10px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1285px',
          xl: '1285px',
        },
      },
      fontSize: {
        '4xl': ["2.5rem", { lineHeight: "normal" }],
      },
    },
  },
  plugins: [],
}