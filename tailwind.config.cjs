
module.exports = {
      content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx,vue}'],
      mode: 'jit',
      theme: {
            extend: {
                  fontFamily: {
                        'sans': ['Roboto']
                  },
                  colors: {
                        white: {
                              "primary": "var(--c-white)",
                              "secondary": "var(--c-white-100)"
                        },
                        black: {
                              "primary": "var(--c-black)",
                              "secondary": "var(--c-black-100)"
                        },
                        blue: {
                              "primary": "var(--c-blue-100)",
                              "secondary": "var(--c-blue-200)"
                        },
                        gray: {
                              1: "var(--c-gray-100)",
                              2: "var(--c-gray-200)",
                              3: "var(--c-gray-300)",
                              4: "var(--c-gray-400)",
                              5: "var(--c-gray-500)",
                              6: "var(--c-gray-600)",
                              7: "var(--c-gray-700)"
                        }
                  },
            },
      },
      plugins: [],
}