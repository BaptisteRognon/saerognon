module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {

      backgroundImage:{
        'fond_fontaine' : "url('/src/assets/fond_fontaine.png')"
      },
      "colors": {
       "blanc": "#ffffff",
       "jaune": "#ffd643",
       "gris": "#969696",
       "noir": "#2d2d2d",
       "noir01": "#4e4b4b",
       "noir02": "#6a6969",
       "gris01": "#c3c3c3",
       "jaune01": "#ffe380",
       "jaune02": "#ffeba5",
       "jaune03": "#fff3c8",
       "jaune04": "#fffae9",
       "dnonf": "#151515"
      },
      "fontSize": {
       "sm": "0.75rem",
       "base": "0.875rem",
       "lg": "1.1875rem",
       "xl": "1.5rem",
       "2xl": "1.5625rem",
       "3xl": "3.3125rem"
      },
      "fontFamily": {
       "raleway": "Raleway",
       "prata": "Prata"
      },
      "borderRadius": {
       "none": "0",
       "xs": "0.125rem",
       "sm": "0.1875rem",
       "default": "0.25rem",
       "lg": "0.3125rem",
       "xl": "0.375rem",
       "2xl": "0.4375rem",
       "3xl": "0.5625rem",
       "4xl": "0.625rem",
       "5xl": "0.8125rem",
       "6xl": "1.25rem",
       "7xl": "2.1875rem",
       "8xl": "2.8271484375rem",
       "9xl": "5.0888671875rem",
       "full": "9999px"
      },

      "screen" : {
        "ipad_mini": '744px',
       "ipad_pro": '1024px',
        "desktop": '1440px'
      }
      
     }
    }
}