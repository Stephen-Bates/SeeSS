import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3001,
    open: true,
    proxy: {
      '/graphql': {
        target: `http://localhost:${process.env.PORT + 1 || 3001}`,
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
