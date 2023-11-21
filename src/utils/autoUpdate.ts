/**
 * @description 提取 html 字符串中 <script> 标签中的 src 路径
 * @param html 测试字符串
 * @returns {string[]} src路径的数组
 */
function extractScriptSrcPaths(html: string) {
    const scriptPattern = /<script[^>]* src=["'](.*?)["']/g;
    const scriptSrcPaths: string[] = [];

    const result = html.matchAll(scriptPattern);
    for (const match of result) {
        scriptSrcPaths.push(match[1]);
    }
    return scriptSrcPaths;
}

/**
 * @description 比较前后 src 路径是否变化
 * @param oldUrl 上一次的 src 路径数组
 * @param newUrl 最新的 src 路径匹配结果
 * @returns {boolean} true: 相同
 */
function isSamePath(oldUrl: string[], newUrl: any) {
    let result = true;
    if (!Array.isArray(newUrl)) result = false;
    if (oldUrl.length !== newUrl.length) result = false;
    for (let i = 0; i < oldUrl.length; i++) {
        if (oldUrl[i] !== newUrl[i]) {
            result = false;
            break;
        }
    }
    return result;
}

/**
 * @description 获取首页字符串
 * @returns {Promise<string>}
 */
function fetchHomeHtmlStr() {
    const timestamp = Date.now(); // 时间戳，避免缓存
    return fetch(`/?${timestamp}`).then(res => res.text());
}

let oldSrcUrlArr: string[] = [];
/**
 * @description 是否需要刷新页面
 * @returns {Promise<boolean>} true: 需要刷新
 */
async function isNeedUpdate() {
    const htmlStr = await fetchHomeHtmlStr();
    const currentSrcUrlArr = extractScriptSrcPaths(htmlStr);
    if (!oldSrcUrlArr.length) oldSrcUrlArr = [...currentSrcUrlArr];
    if (!isSamePath(oldSrcUrlArr, currentSrcUrlArr)) {
        return true;
    }
    oldSrcUrlArr = currentSrcUrlArr;
    return false;
}

/**
 * @description 弹窗提示用户刷新
 */
function showMessage() {
    const message = document.createElement("div");
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        width: 300px;
        height: 200px;
        transform: translate(-50%, -50%);
        font-size: 20px;
        line-height: 200px;
        text-align: center;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        z-index: 9999;
    `;
    message.innerText = "页面更新了，请刷新页面";
    document.body.appendChild(message);
    setTimeout(() => {
        document.body.removeChild(message);
    }, 3000);
}

/**
 * @description 轮询首页是否需要提示刷新页面
 * @param pollIntervalMilliseconds 轮询间隔毫秒
 */
export function autoUpdate(pollIntervalMilliseconds = 10000) {
    setInterval(async () => {
        if (await isNeedUpdate()) {
            showMessage();
        }
    }, pollIntervalMilliseconds);
}

// const htmlString = `
// <html lang="en">
//       <script type="module" crossorigin src="/assets/js/index-a4451b27.js"></script>
//       <script type="mo src="/as5555555s/js/index-a4451b27.js"></script>
//       <link rel="modulepreload" crossorigin href="/assets/js/vendor-7b02c397.js">
// </html>
// `;
