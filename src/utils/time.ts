/**
 * @description 获取当前时间对应的提示语
 * @return string
 */
export function getTimeState() {
    // 获取当前时间
    const timeNow = new Date();
    // 获取当前小时
    const hours = timeNow.getHours();
    // 判断当前时间段
    if (hours >= 6 && hours <= 10) return `早上好 ⛅`;
    if (hours >= 10 && hours <= 14) return `中午好 🌞`;
    if (hours >= 14 && hours <= 18) return `下午好 🌞`;
    if (hours >= 18 && hours <= 24) return `晚上好 🌛`;
    if (hours >= 0 && hours <= 6) return `凌晨好 🌛`;
}

/**
 * setTimeout 递归实现倒计时
 * @param seconds 倒计时间(单位秒)
 * @param callback 拿到当前秒数的回调
 * @param interval_ms 倒计时间隔ms，默认 1000ms
 */
export function countDown(seconds: number, callback: (curSeconds: number) => void, interval_ms = 1000) {
    let count = 0;
    let timeCounter: any = null;
    const startTime = Date.now();

    function fn() {
        count++;
        const gap = Date.now() - (startTime + count * interval_ms);
        const nextTime = interval_ms - gap <= 0 ? 0 : interval_ms - gap;
        const remainTime = seconds * 1000 - (Date.now() - startTime);
        callback(Math.round(remainTime / 1000));
        if (remainTime <= 0) {
            clearTimeout(timeCounter);
            return;
        }
        clearTimeout(timeCounter);
        timeCounter = setTimeout(fn, nextTime);
    }

    timeCounter = setTimeout(fn, interval_ms);
}
// export function countDown(seconds: number, callback: (curSeconds: number) => void, interval_ms: number = 1000) {
//     const startTime = Date.now();

//     function updateCountdown() {
//         const elapsed = Date.now() - startTime;
//         const remainingTime = Math.max(seconds * 1000 - elapsed, 0);
//         const currentSeconds = Math.floor(remainingTime / 1000);
//         callback(currentSeconds);
//         if (remainingTime > 0) {
//             const nextTick = interval_ms - (elapsed % interval_ms);
//             setTimeout(updateCountdown, nextTick);
//         }
//     }

//     updateCountdown();
// }
