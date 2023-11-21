/**
 * 跨标签页通信，发送数据
 * localstorage + storage 事件实现
 * @param key localstorage 的 key
 * @param payload 需要传递的数据
 */
export function sendMsg(key: string, payload: any) {
    localStorage.setItem(
        key,
        JSON.stringify({
            payload: payload,
            temp: Date.now()
        })
    );
}

interface StorageEvent extends Event {
    /** 被修改或删除的存储项的键名 */
    key: string | null;

    /** 存储项修改前的值 */
    oldValue: string | null;

    /** 存储项修改后的值 */
    newValue: string | null;

    /** 触发storage事件的源的URL地址 */
    url: string;

    /** 被修改的存储区域，可以是localStorage或sessionStorage */
    storageArea: Storage;
}

type Handler = (key: string, payload: any) => void;
/**
 * 接收数据：可传入一个回调，当storage事件触发，自动获取最新的数据
 * @param {Handler}handler 回调函数，可在参数中获取key和最新localstorage数据
 * @returns 取消监听的函数
 */
export function listenMsg(handler: Handler) {
    const storageHandler = (event: Event) => {
        const e = event as StorageEvent;
        if (e.key && e.newValue) handler(e.key, JSON.parse(e.newValue).payload);
    };
    window.addEventListener("storage", storageHandler);
    return () => {
        window.removeEventListener("storage", storageHandler);
    };
}

/**====== 使用示例 =========*/

/** 发送端 */

// sendMsg('currentPlayMusic', { id: 1, name: '达尔文' });

/** 接收端 */

// const currentPlayMusicId = ref("");

// let unHandler: any;
// onMounted(() => {
//     unHandler = listenMsg((key, payload) => {
//         if (key === "currentPlayMusic") {
//             currentPlayMusicId.value = payload.id;
//         }
//     });
// });
// onUnmounted(() => {
//     unHandler && unHandler();
// });
