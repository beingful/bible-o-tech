import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/bible-o-tech/'
      : '/',
    plugins: [
        vue(),
        vueDevTools(),
        tailwindcss()
    ],
    server: {
        port: 8080
    },
    resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
  }