import { defineConfig }   from 'vite';
import react              from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",          // Configura o caminho base como relativo
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.js"
  }
})