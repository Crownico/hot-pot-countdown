import { createRouter, createWebHashHistory } from "vue-router";
import NProgress from "@/config/nprogress";

import { ROUTER_WHITE_LIST } from "@/config/config";
import { errorRouter, staticRouter } from "./staticRouter";
// import { useGlobalStore } from "@/stores";
// import { useAuthStore } from "@/stores/modules/auth";

/**
 * @description 动态路由参数配置简介 📚
 * @param path ==> 菜单路径
 * @param name ==> 菜单别名
 * @param redirect ==> 重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 菜单信息
 * @param meta.title ==> 菜单标题
 * 可在 route meta 中设置的一些路由信息（暂未使用）
 * @param meta.icon ==> 菜单图标
 * @param meta.activeMenu ==> 当前路由为详情页时，需要高亮的菜单
 * @param meta.isLink ==> 是否外链
 * @param meta.isHide ==> 是否隐藏
 * @param meta.isFull ==> 是否全屏(示例：数据大屏页面)
 * @param meta.isAffix ==> 是否固定在 tabs nav
 * @param meta.isKeepAlive ==> 是否缓存
 * */
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
    // const globalStore = useGlobalStore();

    // 1.NProgress 开始
    NProgress.start();

    // 2.动态设置标题
    const title = import.meta.env.VITE_APP_TITLE;
    document.title = to.meta.title ? `${to.meta.title} - ${title}` : title;

    // // 3.判断是访问登陆页，有 Token 就在当前页面，没有 Token 重置路由并放行到登陆页
    // if (to.path.toLocaleLowerCase() === LOGIN_URL) {
    //     if (globalStore.token) return next(from.fullPath);
    //     resetRouter();
    //     return next();
    // }

    // 4.判断访问页面是否在路由白名单地址中，如果存在直接放行
    if (ROUTER_WHITE_LIST.includes(to.path)) return next();

    // 5.判断是否有 Token，没有重定向到 login
    // if (!globalStore.token) return next({ path: LOGIN_URL, replace: true });

    // 6.如果没有菜单列表，就重新请求菜单列表并添加动态路由
    // const authStore = useAuthStore();
    // authStore.setRouteName(to.name as string);
    // if (!authStore.authMenuListGet.length) {
    //     /** 此处重新获取菜单列表 */
    //     // await initDynamicRouter();
    //     return next({ ...to, replace: true });
    // }

    // 7.正常访问页面
    next();
});

/**
 * @description 重置路由
 * */
// export const resetRouter = () => {
//     const authStore = useAuthStore();
//     authStore.flatMenuListGet.forEach(route => {
//         const { name } = route;
//         if (name && router.hasRoute(name)) router.removeRoute(name);
//     });
// };

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