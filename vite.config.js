import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: null, // 🔥 Disabling PostCSS
  },
  server: {
    port: 5173,
  },
});
