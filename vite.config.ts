import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), reactRefresh()],
	esbuild: {
		jsxFactory: "h",
		jsxFragment: "Fragment",
	},
	build: {
		assetsDir: "public",
	},
	base: "src",
});
