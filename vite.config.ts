import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      federation({
        name: "pdp",
        remotes: {
          home: "http://localhost:3000/assets/remoteEntry.js",
          cart: "http://localhost:3002/assets/remoteEntry.js",
        },
        shared: ["react", "react-dom", "react-router-dom"],

        exposes: {
          "./PDPContent": "./src/components/PDPContent/PDPContent.tsx",
        },
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
