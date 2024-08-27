/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Darkblue:"#17212E",
        Yellow:"#F5CF6B",
        White:"#FFFFFF",
        lightYellow:{
          200:"f5e4ba"
        }
      },
      fontFamily:{'times': ['"Times New Roman"', 'serif'],}
    },
  },
  plugins: [],
}

