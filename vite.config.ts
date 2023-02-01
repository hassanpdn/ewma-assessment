import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
      port: 8000
  },
  base: './',
  resolve: {
      alias : {
            "@" : fileURLToPath(new URL('./src', import.meta.url))
      }
  }
})
