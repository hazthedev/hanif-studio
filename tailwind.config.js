/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors from PRD
        tomato: '#ED594B',
        'pale-azure': '#8ED5F6',
        'polynesian-blue': '#1E4FA3',
        'chinese-violet': '#845173',

        // Core Brand Colors
        'primary-blue': '#1E4BA1',
        'primary-coral': '#FF6B5B',
        'accent-orange': '#F39C54',

        // Supporting Colors
        'secondary-blue': '#3B6FB6',
        'dark-navy': '#0D2847',
        'light-coral': '#FFE5E2',
        cream: '#FFFBF7',

        // Functional Colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',

        // Text Colors
        'text-primary': '#0D2847',
        'text-secondary': '#4B5563',
        'text-muted': '#9CA3AF',
      },
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'sans-serif'],
        'display': ['Space Grotesk', 'sans-serif'],
      },
      spacing: {
        '4.5': '18px',
        '13': '52px',
        '15': '60px',
        '17': '68px',
        '88': '352px',
        '128': '512px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      screens: {
        'mobile': '375px',
        'mobile-lg': '425px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
        'wide': '1536px',
      },
    },
  },
  plugins: [],
}