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
      name: "AtomX",
      formats: ["umd"],
      fileName: (): string => "atom-x.umd.js",
    },
  },
});
