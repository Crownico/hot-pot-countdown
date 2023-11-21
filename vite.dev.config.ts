import { defineConfig, loadEnv, type ConfigEnv, type UserConfig } from "vite";
import Inspect from "vite-plugin-inspect";

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
    const env = loadEnv(mode, process.cwd(), ""); // 暴露所有env文件数据

    return {
        plugins: [Inspect()],
        server: {
            // 是否开启 https
            https: false,
            // 端口号
            port: +env.VITE_PORT,
            host: "0.0.0.0",
            // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
            // proxy: {
            //     [env.VITE_APP_API_BASE_URL]: {
            //         target: env.VITE_APP_API_BASE_URL__PROXY_TARGET,
            //         changeOrigin: true,
            //         // rewrite: path => path.replace(/^\/__api/, ""),
            //         rewrite: path => path.replace(new RegExp(`^${env.VITE_APP_API_BASE_URL}`), ""),
            //         secure: false
            //     },
            //     [env.VITE_APP_UPLOAD_BASE_URL]: {
            //         target: env.VITE_APP_UPLOAD_BASE_URL__PROXY_TARGET,
            //         changeOrigin: true,
            //         // rewrite: path => path.replace(/^\/__upload_api/, ""),
            //         rewrite: path => path.replace(new RegExp(`^${env.VITE_APP_UPLOAD_BASE_URL}`), ""),
            //         secure: false
            //     }
            // }
        }
    };
});
