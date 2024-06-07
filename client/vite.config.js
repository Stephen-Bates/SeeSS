import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import 'dotenv/config'


// https://vitejs.dev/config/
console.log(`starting client server at ${(process.env.PORT || 3000) + 1}`);
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'See Style Sheets',
        short_name: 'SeeSS',
        description: 'Build, Share, and Learn CSS',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      devOptions: {
        enabled: true
      },
    }),
    react()
  ],
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
