import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { blogPlugin } from './vite-plugin-blog.js';

export default defineConfig({
  plugins: [react(), blogPlugin()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
});
