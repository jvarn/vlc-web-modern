import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths()
  ],
  base: './', // Use relative paths for assets so VLC serves them correctly
  build: {
    outDir: '../', // Output directly to the http/ folder
    emptyOutDir: false, // Don't wipe the http/ folder (which contains old_http and requests)
  }
})
