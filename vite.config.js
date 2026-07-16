import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/revo_web_clientes/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
