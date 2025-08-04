import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Add this for GitHub Pages
  server: {
    port: 3000,
    open: true
  }
}) 