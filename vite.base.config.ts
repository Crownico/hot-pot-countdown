import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// import vueJsx from "@vitejs/plugin-vue-jsx";
// import { viteMockServe } from "vite-plugin-mock";

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
export default defineConfig(({ command }) => {
    return {
        base: "./",
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url))
            },
            extensions: [".js", ".json", ".ts", ".vue"]
        },
        plugins: [
            vue(),
            AutoImport({
                resolvers: [ElementPlusResolver({ importStyle: "sass" })],
                eslintrc: {
                    enabled: true
                }
            }),
            Components({
                resolvers: [ElementPlusResolver({ importStyle: "sass" })]
            }),
            // // jsx、tsx语法支持
            // vueJsx(),
            // // 使用 svg 图标
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), "./src/assets/icons")],
                symbolId: "icon-[dir]-[name]" // symbolId和use使用的名称对应 <use xlinkHref={"#icon-" + 路径 + svgName} />
            })
            // // mock支持
            // viteMockServe({
            //     mockPath: "mock",
            //     localEnabled: command === "serve",
            //     // prodEnabled: command !== "serve" && true,
            //     // injectCode: `
            //     //     import { setupProdMockServer } from './mockProdServer';
            //     //     setupProdMockServer();
            //     //     `,
            //     logger: true
            // })
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    javascriptEnabled: true,
                    additionalData: `@use "@/styles/var.scss" as *; 
                                    @use "@/styles/mixin.scss" as *;  
                                    @use "@/styles/element-plus.scss" as *; `
                }
            }
        }
    };
});
