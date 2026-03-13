import { resolve } from "node:path";

import { defineConfig } from "vite";

const entries = {
  index: resolve("src/index.ts"),
  date: resolve("src/quickkit-date/index.ts"),
} as const;

export default defineConfig({
  build: {
    target: "es2023",
    minify: "esbuild",
    sourcemap: false,
    lib: {
      entry: entries,
      name: "QuickkitTs",
      formats: ["es", "cjs"],
      fileName: (format, entryName): string =>
        format === "es" ? `${entryName}.js` : `${entryName}.cjs`,
    },
  },
});
