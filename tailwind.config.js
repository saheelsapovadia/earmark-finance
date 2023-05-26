// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
       'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
       '3xl': '1.875rem',
       '4xl': '2.25rem',
        '5xl': '3rem',
        'first': '2.875rem',
        '6xl': '4rem',
        'sec': '3.75rem',
       '8xl': '5rem',
      '7xl':'2.5rem'
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '10px 0px rgba(0, 0, 0, 0)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '15px 0px 5px 15px rgba(0, 0, 0, 0.1)',
     2: '15px 0px 5px 15px rgba(0, 0, 0, 0.1)',
     'bo': 'inset 0 -12px 0 rgba(255,255,255)',
     input:'0 10px 40px -5px rgb(224 212 200 / 80%)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    minWidth:{
      '0':'0',
      '9':'9'
    },
    extend: {
      outline:
       {
        blue: '2px 2px solid #0000ff',
      },
      lineHeight: {
        'first': '4rem',
        'sec': '3.375rem',
        'v':'1.875rem',
        '2v':'2rem',
        '3v':'2.875rem',
       },
      zIndex: {
        '1900': '1900',
       },
      
      fontFamily:{
        body:['inter']
      },
      keyframes: {
        animate: {
          '0%': { text: 'makers' },
          '50%': { text: 'founders' },
          '75%': { text: 'entrepreneurs' },
        }
       },
       animation: {
        'animate-text': 'animate 1s infinite',
       }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'beige': 'rgba(255,250,245,1)',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
     })
    
    
  },
  variants: {
    extend: {},
  },
  plugins: [
   
  ],
}