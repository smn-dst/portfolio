const breakpoints = require('./resources/breakpoints.json');

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

const getViewport = (name) => {
  if (breakpoints[name]) return breakpoints[name];

  return '0px';
};

// https://tailwindcss.com/docs/configuration
module.exports = {
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}'],
  corePlugins: {
    container: false,
  },
  theme: {
    screens: {
      'sm': getViewport('sm'),
      'md': getViewport('md'),
      'rg': getViewport('rg'),
      'lg': getViewport('lg'),
      'xl': getViewport('xl'),
      '2xl': getViewport('2xl'),
      '3xl': getViewport('3xl'),
    },
    colors: {
      body: withOpacityValue('--color-body'),
      second: withOpacityValue('--color-second'),
      grey: withOpacityValue('--color-grey'),
      accent: withOpacityValue('--color-accent'),
      white: withOpacityValue('--color-white'),
      black: withOpacityValue('--color-black'),
      red: withOpacityValue('--color-red'),
      green: withOpacityValue('--color-green'),
      transparent: 'transparent',
    },
    fontSize: {
      9: ['var(--text-9)', 'calc(var(--text-9) * 1.5)'],
      12: ['var(--text-12)', 'calc(var(--text-12) * 1.5)'],
      14: ['var(--text-14)', 'calc(var(--text-14) * 1.5)'],
      16: ['var(--text-16)', 'calc(var(--text-16) * 1.5)'],
      base: ['var(--text-base)', 'calc(var(--text-base) * 1.5)'],
      22: ['var(--text-22)', 'calc(var(--text-22) * 1.25)'],
      24: ['var(--text-24)', 'calc(var(--text-24) * 1.25)'],
      28: ['var(--text-28)', 'calc(var(--text-28) * 1.25)'],
      34: ['var(--text-34)', 'calc(var(--text-34) * 1.25)'],
      38: ['var(--text-38)', 'calc(var(--text-38) * 1.25)'],
      40: ['var(--text-40)', 'calc(var(--text-40) * 1.25)'],
      45: ['var(--text-45)', 'calc(var(--text-45) * 1.25)'],
      48: ['var(--text-48)', 'calc(var(--text-48) * 1.25)'],
      52: ['var(--text-52)', 'calc(var(--text-52) * 1.25)'],
      58: ['var(--text-58)', 'calc(var(--text-58) * 1.25)'],
      62: ['var(--text-62)', 'calc(var(--text-62) * 1.125)'],
      64: ['var(--text-64)', 'calc(var(--text-64) * 1.125)'],
      72: ['var(--text-72)', 'calc(var(--text-72) * 1.125)'],
      82: ['var(--text-82)', 'calc(var(--text-82) * 1.125)'],
      102: ['var(--text-102)', 'calc(var(--text-102) * 1.125)'],
      110: ['var(--text-110)', 'calc(var(--text-110) * 1.125)'],
      120: ['var(--text-120)', 'calc(var(--text-120) * 1.125)'],
      135: ['var(--text-135)', 'calc(var(--text-135) * 1.125)'],
      168: ['var(--text-168)', 'calc(var(--text-168) * 1.125)'],
      210: ['var(--text-210)', 'calc(var(--text-210) * 1.125)'],
      250: ['var(--text-250)', 'calc(var(--text-250) * 1.125)'],
      270: ['var(--text-270)', 'calc(var(--text-270) * 1.125)'],
    },
    fontFamily: {
      body: ['var(--font-body)'],
      text: ['var(--font-text)'],
      subText: ['var(--font-subText)'],
    },
    opacity: {
      0: '0',
      10: '.1',
      20: '.2',
      30: '.3',
      40: '.4',
      50: '.5',
      60: '.6',
      70: '.7',
      80: '.8',
      90: '.9',
      100: '1',
    },
    extend: {
      boxShadow: {
        md: '0 2px 10px rgba(0, 0, 0, 0.12)',
      },
      maxWidth: {
        screen: '100vw',
      },
      maxHeight: {
        screen: '100vh',
      },
      spacing: {
        wscreen: '100vw',
        hscreen: '100vh',
      },
      inset: {
        unset: 'unset',
      },
      transitionDuration: {
        0: '0ms',
        600: '600ms',
      },
      transitionDelay: {
        0: '0ms',
        400: '0.4s',
        450: '0.45s',
        600: '0.6s',
      },
      transitionProperty: {
        color: 'color',
        bg: 'background-color',
      },
      screens: {
        'md-landscape': { raw: '(max-width: 768px) and (orientation: landscape)' },
      },
      zIndex: {
        '-1': -1,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100,
        '1000': 1000,
      },
      transitionTimingFunction: {
        'in-quad': 'var(--ease-in-quad)',
        'in-cubic': 'var(--ease-in-cubic)',
        'in-quart': 'var(--ease-in-quart)',
        'in-quint': 'var(--ease-in-quint)',
        'in-expo': 'var(--ease-in-expo)',
        'in-circ': 'var(--ease-in-circ)',
        'out-quad': 'var(--ease-out-quad)',
        'out-cubic': 'var(--ease-out-cubic)',
        'out-quart': 'var(--ease-out-quart)',
        'out-quint': 'var(--ease-out-quint)',
        'out-expo': 'var(--ease-out-expo)',
        'out-circ': 'var(--ease-out-circ)',
        'in-out-quad': 'var(--ease-in-out-quad)',
        'in-out-cubic': 'var(--ease-in-out-cubic)',
        'in-out-quart': 'var(--ease-in-out-quart)',
        'in-out-quint': 'var(--ease-in-out-quint)',
        'in-out-expo': 'var(--ease-in-out-expo)',
        'in-out-circ': 'var(--ease-in-out-circ)',
      },
      colors: {},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'slider-image': '0 0.1875rem 1.25rem 0 rgb(0 0 0 / 8%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.break-lines': {
          wordSpacing: '9999px',
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.overflow-unset': {
          overflow: 'unset',
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        '.fontvw-thin': {
          fontVariationSettings: '"wght" 100',
        },
        '.fontvw-extralight': {
          fontVariationSettings: '"wght" 200',
        },
        '.fontvw-light': {
          fontVariationSettings: '"wght" 300',
        },
        '.fontvw-regular': {
          fontVariationSettings: '"wght" 400',
        },
        '.fontvw-medium': {
          fontVariationSettings: '"wght" 500',
        },
        '.fontvw-semibold': {
          fontVariationSettings: '"wght" 600',
        },
        '.fontvw-bold': {
          fontVariationSettings: '"wght" 700',
        },
        '.fontvw-extrabold': {
          fontVariationSettings: '"wght" 800',
        },
        '.fontvw-black': {
          fontVariationSettings: '"wght" 900',
        },
      });
    },
  ],
};
