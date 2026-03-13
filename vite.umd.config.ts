import { resolve } from "node:path";

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    target: "es2023",
    minify: "esbuild",
    sourcemap: false,
    lib: {
      entry: resolve("src/index.ts"),
      name: "QuickkitTs",
      formats: ["umd"],
      fileName: (): string => "quickkit-ts.umd.js",
    },
  },
});
