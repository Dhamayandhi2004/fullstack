import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output directory is correctly set for Vercel
  },
  server: {
    base: '/', // Define the base path
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Add an alias for your source directory
    },
  },
});
