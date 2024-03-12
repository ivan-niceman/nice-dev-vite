import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // this base for gh-pages
  // base: "/nice-dev-vite",
  plugins: [react()],
});
