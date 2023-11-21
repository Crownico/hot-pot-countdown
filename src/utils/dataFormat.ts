// 数据格式化显示，比如时间日期，文件大小等

/**
 * 将字节数据单位换算成 KB 或 MB
 * @param {number}bytes 字节数
 * @returns
 */
export function formatBytesToMBOrKB(bytes: number): string {
    // 计算字节数对应的KB数
    const kilobytes = bytes / 1024;
    // 计算字节数对应的MB数
    const megabytes = kilobytes / 1024;

    // 如果字节数小于1024，则直接返回字节数
    if (bytes < 1024) {
        return `${bytes.toFixed(1)} bytes`;
        // 如果KB数小于1024，则返回KB数
    } else if (kilobytes < 1024) {
        return `${kilobytes.toFixed(1)} KB`;
        // 如果MB数小于1024，则返回MB数
    } else {
        return `${megabytes.toFixed(1)} MB`;
    }
}

/**
 * 将秒数转换为天，时:分:秒格式
 * @param seconds 秒
 * @returns dd天 hh:mm:ss
 */
export function formatSecondsToTime(seconds: number) {
    // 计算秒数除以60的商
    const minutes = Math.floor(seconds / 60);
    // 计算秒数除以60的余数
    const remainingSeconds = seconds % 60;

    // 计算分钟数除以60的商
    const hours = Math.floor(minutes / 60);
    // 计算分钟数除以60的余数
    const remainingMinutes = minutes % 60;

    const days = Math.floor(hours / 24);
    const remainDays = hours % 24;

    // 将天数转换为字符串，并且使用padStart方法补全到2位
    const formattedDays = days.toString().padStart(2, "0");
    // 将小时数转换为字符串，并且使用padStart方法补全到2位
    const formattedHours = remainDays.toString().padStart(2, "0");
    // 将分钟数转换为字符串，并且使用padStart方法补全到2位
    const formattedMinutes = remainingMinutes.toString().padStart(2, "0");
    // 将秒数转换为字符串，并且使用padStart方法补全到2位
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    // 将天、小时、分钟、秒数拼接成时间格式
    const ddhhmmss = `${formattedDays}天 ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    // 时分秒
    const hhmmss = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    const mmss = `${formattedMinutes}:${formattedSeconds}`;

    // 返回一个包含天、小时、分钟、秒数和时间格式的对象
    return {
        days: formattedDays,
        hours: formattedHours,
        minutes: formattedMinutes,
        seconds: formattedSeconds,
        ddhhmmss,
        hhmmss,
        mmss
    };
}
