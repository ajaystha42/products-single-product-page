import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      federation({
        name: "pdp",
        remotes: {
          home: env["VITE_HOME_URL"],
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
