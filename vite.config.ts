import { ConfigEnv, defineConfig, type UserConfig } from "vite";

import baseConfig from "./vite.base.config";
import devConfig from "./vite.dev.config";
import prodConfig from "./vite.prod.config";

// https://vitejs.dev/config/

// 尽量不要将同一项配置项既写在base中，又写在dev\prod中，合并时会覆盖base

/* 合并base和dev\prod的配置，并处理数组配置的覆盖问题 */
const resolveOverlaysForArray = (
    baseConfig: UserConfig,
    devOrProdConfig: UserConfig,
    configItemArr: (keyof UserConfig)[]
): UserConfig => {
    function isType(val: any) {
        if (val === null) return "null";
        if (typeof val !== "object") return typeof val;
        else return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
    }

    const config: any = { ...baseConfig, ...devOrProdConfig };

    // 覆盖发生时：仅当覆盖的一方为对象时报错，属于传入的字段并且是数组就自动合并，基本类型就允许覆盖
    Object.keys(baseConfig).forEach((item: any) => {
        const isOvered = Object.keys(devOrProdConfig).includes(item);
        const baseConfigItemValue = baseConfig[item];
        const devOrProdConfigItemValue = devOrProdConfig[item];
        if (isOvered && (isType(baseConfigItemValue) === "object" || isType(devOrProdConfigItemValue) === "object")) {
            throw new Error(`base配置中的 ${item} 配置项被覆盖！`);
        }
        if (!configItemArr.includes(item)) return config;
        if (isType(baseConfigItemValue) === "array" && isType(devOrProdConfigItemValue) === "array") {
            config[item] = [...baseConfigItemValue, ...devOrProdConfigItemValue];
        }
    });

    return config;
};

const envResolver = {
    serve: (configEnv: ConfigEnv) => {
        // 之所以用函数，是因为应用配置文件时，这里可以做一些额外的操作，比如查看当前应用的配置等

        // 插件配置选项不得不写在多个文件中，手动处理一下插件配置的覆盖问题
        const config = resolveOverlaysForArray(baseConfig(configEnv), devConfig(configEnv), ["plugins"]);
        // console.log("config", config);
        return config;
    },
    build: (configEnv: ConfigEnv) => {
        return resolveOverlaysForArray(baseConfig(configEnv), prodConfig(configEnv), ["plugins"]);
    }
};

export default defineConfig(configEnv => {
    return envResolver[configEnv.command](configEnv);
});
