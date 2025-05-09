module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: '#7e7e7e',
        gray1: '#777',
        gray2: '#f7f7f7',
        gray3: '#ccc',
        gray4:'#e6e6e6',
        lightBlack: '#333',
        lightGray:'#eee',
        lightBlue:'#98d8ca',
        blue:'#68aaeb',
        tomatoRed:'#c61932',
        transparentBg: 'rgba(119,119,119,0.3)',
        grayWhite: '#e7e7e7',
        blue1:'#1e73be',
        orange:'#dd9933'
      },
      boxShadow: {
        md: '0px 2px 5px rgba(0,0,0, 0.2)',
      },
      zIndex: {
        10: '10',
        2: '2',
        999: '999',
        1: '1',
      },
      gridTemplateColumns:{
        'fill-350': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      rotate:{
        '270':'270deg'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
