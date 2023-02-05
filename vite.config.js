import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import dns from 'dns'
import path from 'path'

dns.setDefaultResultOrder('verbatim')
const envDir = path.resolve(__dirname, "environment");

// https://vitejs.dev/config/
const loadEnvVariables = (mode) => {
      Object.assign(process.env, loadEnv(mode, envDir, ""));
      console.debug("process.env contains: \n" + JSON.stringify(process.env, undefined, 2));
};
export default defineConfig({
      plugins: [vue()],
      define: loadEnvVariables,
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
