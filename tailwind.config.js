/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: '0.4rem',
      sm: '0.6rem',
      base: '0.8rem',
      large: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'lunapurple': '#5210DC',
      'lunagreen': "#9ADC10",
      'lunared': "#DC107E",
      'lunayellow': "#FFB800",
      'lightpurple': '#E5E0F2',
      'alertpurple': '#6F39E2',
      'pagebg': '#F6F4F6',
      'text-black': '#0C0221',
      'text-grey': '#5F5F5F',
      'green': '#165677',
      'lightgreen': '#E7EEF1',
      'lightgrey': '#969696',
      'proggreen': '#32A48D',
      'progyellow': '#FF9900',
      'progred': '#FF001F',
      'orange': '#F37A2E',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-luna(purple|green|yellow)/
  },
  {
    pattern: /(lightgrey|lightgreen|progyellow)/
  }

  ]
}
