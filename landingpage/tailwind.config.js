/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
    theme: { 
      screens: {
        'xsm': '320px',

        'wsm': '425px',

        'ysm': '550px',

        'sm': '625px',
        // => @media (min-width: 640px) { ... }

        'smxl': '750px',

  
        'md': '800px',
        // => @media (min-width: 768px) { ... }

        'mdxl': '880px',
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '1921px',
      },

      borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      colors: {
      'darkgreen': '#103B00',
      'white': '#FFFFF5',
      'orangee': '#F3530F',
      'pink': '#FF9EB8',
      'lightgreen': '#ADC319',
      'yellow': '#FFE74C'
    },
    spacing: {
      '100px': '100px',
      '150px': '150px',
      '547px': '547px',
      '1200px': '1200px',
    }
  },
  },
  plugins: [],
}

