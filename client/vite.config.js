import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import 'dotenv/config'


// https://vitejs.dev/config/

console.log(`starting client server at ${(process.env.PORT || 3000) + 1}`);
export default defineConfig({
  plugins: [react()],
  server: {
    port: (process.env.PORT || 3000) + 1,
    open: true,
    proxy: {
      '/graphql': {
        target: `http://localhost:${process.env.PORT}`,
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
