import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import 'dotenv/config'


// https://vitejs.dev/config/

console.log(`starting client server at ${process.env.PORT}`);
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
