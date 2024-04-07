import { defineConfig } from "vite";
import devServer from "@hono/vite-dev-server";

export default defineConfig({
  plugins: [
    devServer({
      entry: "src/main.ts", // The file path of your application.
    }),
  ],
  server: {
    port: 5000,
  },
});
