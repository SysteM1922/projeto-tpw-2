module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {




          "primary": "#ffffff",



          "secondary": "#98f785",



          "accent": "#51a81f",



          "neutral": "#1C1D22",



          "base-100": "#4A1D96",



          "info": "#6BC7DB",



          "success": "#79ECE2",



          "warning": "#F4B05D",



          "error": "#EF6164",
        },
      },
    ],
  },
  plugins: [require("daisyui"),
            require('flowbite/plugin'),]

};