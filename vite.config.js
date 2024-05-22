import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      "process.env.APP_BASE_URL": JSON.stringify(env.APP_BASE_URL),
    },
    resolve: {
      alias: {
        app: "/src/app",
        pages: "/src/pages",
        widgets: "/src/widgets",
        shared: "/src/shared",
      },
    },
  };
});
