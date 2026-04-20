import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const basePath = mode === 'development'
    ? process.env.VITE_BASE_PATH_DEV
    : process.env.VITE_BASE_PATH_PROD

  return {
    base: basePath || '/',
    plugins: [
      react(),
      tailwindcss(),
    ],
    build: {
      outDir: 'dist',
    },
    define: {
      '__APP_BASE_PATH__': JSON.stringify(basePath || '/')
    }
  }
})
