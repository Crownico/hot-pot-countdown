/** 处理动态路由 */

import { RouteRecordRaw } from "vue-router";

/** 自动导入全部静态路由，无需再手动引入！匹配 src/router/modules 目录（任何嵌套级别）中具有 .ts 扩展名的所有文件，除了 remaining.ts 文件
 * 如何匹配所有文件请看：https://github.com/mrmlnc/fast-glob#basic-syntax
 * 如何排除文件请看：https://cn.vitejs.dev/guide/features.html#negative-patterns
 */

/**
 * 获取所有路由对象
 * @returns {RouteRecordRaw[]} allRoutes
 */
const getAllRoutesList = async () => {
    const allRoutes: RouteRecordRaw[] = [];
    // import.meta.glob 批量导入文件
    const routeFileMap: Record<string, any> = import.meta.glob(["./modules/**/*.ts", "!./modules/**/remaining.ts"], {
        eager: true
    });
    Object.values(routeFileMap).forEach(item => {
        allRoutes.push(item.default);
    });
    console.log("allRoutes", allRoutes);
    return allRoutes;
};

/**
 * @description 使用递归处理路由菜单 path，生成一维数组(第一版本地路由鉴权会用到)
 * @param {Array} menuList 服务器请求下来的菜单列表
 * @param {Array} menuPathArr 递归保存数据的数组，不用传参
 * @return {string[]} menuPathArr 菜单地址的一维数组 ['**','**']
 */
export function getMenuListPath(menuList: any[], menuPathArr: string[] = []) {
    menuList.forEach(item => {
        typeof item === "object" && item.path && menuPathArr.push(item.path);
        item.children?.length && getMenuListPath(item.children, menuPathArr);
    });
    return menuPathArr;
}

/**
 * @description 扁平化数组对象(主要用来处理路由菜单)
 * @param {Array} menuList 服务器请求下来的菜单列表
 * @return array
 */
export function getFlatArr(menuList: any[]) {
    const newMenuList: any[] = JSON.parse(JSON.stringify(menuList));
    return newMenuList.reduce((pre: any[], current) => {
        let flatArr = [...pre, current];
        if (current.children) flatArr = [...flatArr, ...getFlatArr(current.children)];
        return flatArr;
    }, []);
}

export function menuToRoutes(menuList: any[]): Promise<RouteRecordRaw[]> {
    // 之所以用promise是因为为了获取所有定义好的路由导入文件是异步的
    return new Promise((resolve, _reject) => {
        getAllRoutesList().then(res => {
            // 1. 获取所有的routes
            const allRoutes: RouteRecordRaw[] = res;
            // 2. 比对获取该用户的routes
            const menuPathArr = getMenuListPath(menuList);
            const routes: RouteRecordRaw[] = allRoutes.filter(item => menuPathArr.includes(item.path));

            resolve(routes);
        });
    });
}

/** 另一种方式获取动态路由，但是代码耦合度过高 */

// /**
//  * 拿到服务器的返回的 path 递归匹配所有的路由，匹配上了，则保存该路由准备注册
//  * @param {any} menus  服务器返回的菜单权限树
//  * @param {RouteRecordRaw[]} allRoutes 全部路由
//  * @param {RouteRecordRaw[]} activeRoute 该用户激活的路由
//  */
// const recurseGetRoute = (menus: any[], allRoutes: RouteRecordRaw[], activeRoute: RouteRecordRaw[]) => {
//     // 遍历传递的菜单
//     for (const menu of menus) {
//         // 如果没有children属性，则将该项直接push到route中
//         if (!menu.children) {
//             // 找到对应的路由配置文件
//             const r = allRoutes.find((route: any) => route.path === menu.path);
//             // 如果找到匹配的则进行添加
//             r && activeRoute.push(r);
//         } else {
//             recurseGetRoute(menu.children, allRoutes, activeRoute);
//         }
//     }
// };

// /**
//  * 拿到服务器的返回的 path 递归匹配所有的路由，匹配上了，则保存该路由准备注册
//  * @param {any} userMenu 服务器返回的菜单权限树
//  * @returns {Promise<RouteRecordRaw[]>} 该用户激活的路由
//  */
// export const menuToRoutes = (userMenu: any[]): Promise<RouteRecordRaw[]> => {
//     return new Promise(resolve => {
//         const routes: RouteRecordRaw[] = [];

//         getAllRoutesList().then(res => {
//             // 1. 获取所有的routes
//             const allRoutes: RouteRecordRaw[] = res;
//             // 2. 配置该权限的routes
//             recurseGetRoute(userMenu, allRoutes, routes);

//             resolve(routes);
//         });
//     });
// };

/**
 * example：注册路由
 */
// actions: {
//     async getData() {
//       /* more request code */
//       // 动态添加路由
//       if (this.menuList) {
//         const routes = await menuToRoutes(this.menuList)
//         for (const route of routes) {

//           router.addRoute('main', route)

//         }
//       }
//     },
//   }
