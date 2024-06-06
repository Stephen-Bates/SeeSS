import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT,
    open: true,
    proxy: {
      '/graphql': {
        target: `http://localhost:${(process.env.PORT || 3000) + 1}`,
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
