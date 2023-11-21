import { defineConfig, loadEnv } from "vite";

// import { visualizer } from "rollup-plugin-visualizer";
// import viteCompression from "vite-plugin-compression";
// import { cdn } from "./build/cdn";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        // * 打包去除 console.log && debugger
        esbuild: {
            pure: env.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
        },
        build: {
            outDir: "dist",
            minify: "esbuild",
            reportCompressedSize: true, // 禁用 gzip 压缩大小报告，可略微减少打包时间
            chunkSizeWarningLimit: 2000, // 规定触发警告的 chunk 大小
            rollupOptions: {
                output: {
                    // 静态资源分类打包到对应的文件夹中
                    chunkFileNames: "assets/js/[name]-[hash].js",
                    entryFileNames: "assets/js/[name]-[hash].js",
                    assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
                    // 第三方库独立成包，此类包不经常变化，因此指纹不变，可最大限度利用浏览器缓存
                    manualChunks: function (id) {
                        if (id.includes("node_modules")) {
                            return "vendor";
                        }
                    }
                }
            }
        }
        // plugins: [
        //     // cdn
        //     env.VITE_CDN ? cdn : null,
        //     // 是否生成包预览，分析依赖包大小做优化处理
        //     env.VITE_REPORT && visualizer({ open: true, brotliSize: true, gzipSize: true, filename: "report.html" }),
        //     // 是否 gizp 压缩
        //     env.VITE_BUILD_COMPRESS &&
        //         viteCompression({
        //             // 生成的压缩包后缀
        //             ext: ".gz",
        //             // 体积大于threshold才会被压缩
        //             threshold: 0,
        //             // 默认压缩.js|mjs|json|css|html后缀文件，设置成true，压缩全部文件
        //             filter: () => true,
        //             // 压缩后是否删除原始文件
        //             deleteOriginFile: false
        //         })
        // ]
    };
});
