import { defineConfig } from "vite";
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import { resolve } from "path";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: process.env.NODE_ENV === "production" ? "./" : "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  plugins: [
    createSvgSpritePlugin({
      exportType: 'vanilla',
      symbolId: 'icon-[name]',
      include: '**/src/assets/img/icons/*.svg',
    }),
  ],
});
