// vite.config.js
import { defineConfig } from "file:///D:/[codes]/merawang/kimak-merawang/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
import { VitePWA } from "file:///D:/[codes]/merawang/kimak-merawang/node_modules/vite-plugin-pwa/dist/index.js";
import react from "file:///D:/[codes]/merawang/kimak-merawang/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/[codes]/merawang/kimak-merawang/vite.config.js";
var manifestPlugin = {
  registerType: "prompt",
  includeAssets: ["logoKKN.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "Portal Sistem Informasi Desa Kimak",
    short_name: "Portal Sistem Informasi Desa Kimak",
    description: "Sebuah portal untuk integrasi berbagai sistem informasi di Desa Kimak",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon"
      },
      {
        src: "/maskable-icon.png",
        sizes: "225x225",
        type: "image/png",
        purpose: "any maskable"
      }
    ],
    theme_color: "#059669",
    background_color: "#ffffff",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait"
  }
};
var vite_config_default = defineConfig({
  plugins: [react(), VitePWA(manifestPlugin)],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      // import mapping using @
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxbY29kZXNdXFxcXG1lcmF3YW5nXFxcXGtpbWFrLW1lcmF3YW5nXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxbY29kZXNdXFxcXG1lcmF3YW5nXFxcXGtpbWFrLW1lcmF3YW5nXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9bY29kZXNdL21lcmF3YW5nL2tpbWFrLW1lcmF3YW5nL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gXCJub2RlOnVybFwiO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuXG5jb25zdCBtYW5pZmVzdFBsdWdpbiA9IHtcbiAgcmVnaXN0ZXJUeXBlOiAncHJvbXB0JyxcbiAgaW5jbHVkZUFzc2V0czogWydsb2dvS0tOLmljbycsICdhcHBsZS10b3VjaC1pY29uLnBuZycsICdtYXNrZWQtaWNvbi5zdmcnXSxcbiAgbWFuaWZlc3Q6IHtcbiAgICBuYW1lOiAnUG9ydGFsIFNpc3RlbSBJbmZvcm1hc2kgRGVzYSBLaW1haycsXG4gICAgc2hvcnRfbmFtZTogJ1BvcnRhbCBTaXN0ZW0gSW5mb3JtYXNpIERlc2EgS2ltYWsnLFxuICAgIGRlc2NyaXB0aW9uOiAnU2VidWFoIHBvcnRhbCB1bnR1ayBpbnRlZ3Jhc2kgYmVyYmFnYWkgc2lzdGVtIGluZm9ybWFzaSBkaSBEZXNhIEtpbWFrJyxcbiAgICBpY29uczogW1xuICAgICAge1xuICAgICAgICBzcmM6ICcvYW5kcm9pZC1jaHJvbWUtMTkyeDE5Mi5wbmcnLFxuICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3JjOiAnL2FuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nJyxcbiAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJy9hcHBsZS10b3VjaC1pY29uLnBuZycsXG4gICAgICAgIHNpemVzOiAnMTgweDE4MCcsXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICBwdXJwb3NlOiAnYXBwbGUgdG91Y2ggaWNvbidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogJy9tYXNrYWJsZS1pY29uLnBuZycsXG4gICAgICAgIHNpemVzOiAnMjI1eDIyNScsXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICBwdXJwb3NlOiAnYW55IG1hc2thYmxlJ1xuICAgICAgfSxcbiAgICBdLFxuICAgIHRoZW1lX2NvbG9yOiAnIzA1OTY2OScsXG4gICAgYmFja2dyb3VuZF9jb2xvcjogJyNmZmZmZmYnLFxuICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcbiAgICBzY29wZTogJy8nLFxuICAgIHN0YXJ0X3VybDogJy8nLFxuICAgIG9yaWVudGF0aW9uOiAncG9ydHJhaXQnXG4gIH1cbn1cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBWaXRlUFdBKG1hbmlmZXN0UGx1Z2luKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjXCIsIGltcG9ydC5tZXRhLnVybCkpLCAvLyBpbXBvcnQgbWFwcGluZyB1c2luZyBAXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdTLFNBQVMsb0JBQW9CO0FBQzdULFNBQVMsZUFBZSxXQUFXO0FBQ25DLFNBQVMsZUFBZTtBQUN4QixPQUFPLFdBQVc7QUFIaUssSUFBTSwyQ0FBMkM7QUFLcE8sSUFBTSxpQkFBaUI7QUFBQSxFQUNyQixjQUFjO0FBQUEsRUFDZCxlQUFlLENBQUMsZUFBZSx3QkFBd0IsaUJBQWlCO0FBQUEsRUFDeEUsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLElBQ1osYUFBYTtBQUFBLElBQ2IsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLElBQ0EsYUFBYTtBQUFBLElBQ2Isa0JBQWtCO0FBQUEsSUFDbEIsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLEVBQ2Y7QUFDRjtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxjQUFjLENBQUM7QUFBQSxFQUMxQyxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
