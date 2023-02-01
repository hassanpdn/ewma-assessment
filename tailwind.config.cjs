// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
      content: ['./src/**/*.{html,js,jsx,tsx,vue}'],
      theme: {
            extend: {
                  colors: {
                        "primary-color": "var(--primary-color)"
                  },
            },
      },
      plugins: [],
}