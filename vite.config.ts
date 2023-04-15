import react from "@vitejs/plugin-react";
import path from "node:path";
import dts from "vite-plugin-dts";
import { defineConfig, splitVendorChunkPlugin } from "vite";

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    dts({
      insertTypesEntry: true,
      include: ['./packages/*']
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "packages/index.ts"),
      name: "FirebaseProvider",
      formats: ["es", "umd", "cjs"],
      fileName: (format) => `firebase-provider.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@firebase/auth", "@firebase/app"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
