import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "url";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: "@",
				replacement: fileURLToPath(new URL("./src", import.meta.url))
			},
			{
				find: "@assets",
				replacement: fileURLToPath(
					new URL("./src/assets", import.meta.url)
				)
			},
			{
				find: "@comp",
				replacement: fileURLToPath(
					new URL("./src/components", import.meta.url)
				)
			},
			{
				find: "@page",
				replacement: fileURLToPath(
					new URL("./src/containers/", import.meta.url)
				)
			},
			{
				find: "@vault",
				replacement: fileURLToPath(
					new URL("./src/content", import.meta.url)
				)
			},
			{
				find: "@styles",
				replacement: fileURLToPath(
					new URL("./src/stylesheet", import.meta.url)
				)
			},
			{
				find: "@noda",
				replacement: fileURLToPath(
					new URL("./src/utils", import.meta.url)
				)
			}
		]
	}
});
