import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const projectRootDir = __dirname

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: 'http://0.0.0.0:8080'
  },
  resolve: {
    alias: {
      '@infrastructure': path.resolve(projectRootDir, './src/infrastructure'),
      '@presentation': path.resolve(projectRootDir, './src/presentation'),
      '@pages': path.resolve(projectRootDir, './src/presentation/pages'),
    }
  }
})
