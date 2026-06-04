import { copyFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/coffee-site/' : '/',
  plugins: [
    react(),
    {
      name: 'spa-404',
      closeBundle() {
        if (mode === 'production') {
          copyFileSync(join('dist', 'index.html'), join('dist', '404.html'))
        }
      },
    },
  ],
}))
