import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh(), svgr()],
});
