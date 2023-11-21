/**
 * @description 获取浏览器默认语言并简单预处理
 * @return string
 */
export function getBrowserLang() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
    let defaultBrowserLang = "";
    if (
        browserLang.toLowerCase() === "cn" ||
        browserLang.toLowerCase() === "zh" ||
        browserLang.toLowerCase() === "zh-cn"
    ) {
        defaultBrowserLang = "zh";
    } else {
        defaultBrowserLang = "en";
    }
    return defaultBrowserLang;
}
