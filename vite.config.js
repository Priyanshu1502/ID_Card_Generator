import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "c454607d-832c-4437-9e40-e8a9b8f7bb70-00-2ctshlt1fo9h6.pike.replit.dev",
    ],
  },
});
