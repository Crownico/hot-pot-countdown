import { createRouter, createWebHashHistory } from "vue-router";
import NProgress from "@/config/nprogress";

import { errorRouter, staticRouter } from "./staticRouter";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...staticRouter, ...errorRouter],
    strict: false,
    scrollBehavior(_to, from, savedPosition) {
        return new Promise(resolve => {
            if (savedPosition) {
                return savedPosition;
            } else {
                if (from.meta.saveSrollTop) {
                    const top: number = document.documentElement.scrollTop || document.body.scrollTop;
                    resolve({ left: 0, top });
                }
            }
        });
    }
});

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, _from, next) => {
    // 1.NProgress 开始
    NProgress.start();

    // 2.动态设置标题
    const title = import.meta.env.VITE_APP_TITLE;
    document.title = to.meta.title ? `${to.meta.title} - ${title}` : title;

    next();
});

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
    NProgress.done();
});

/**
 * @description 路由跳转错误
 * */
router.onError(error => {
    NProgress.done();
    console.warn("路由错误", error.message);
});

export default router;
