// 一些数组相关的工具方法

/**
 * 根据对象数组中的对象的某个属性去重
 * @param array
 * @param property 数组中对象的属性
 */
export function removeDuplicates<T>(array: T[], property: keyof T): T[] {
    // 定义一个空数组，用于存放去重后的结果
    const uniqueArray: T[] = [];

    // 遍历传入的数组
    for (const item of array) {
        // 判断uniqueArray中是否存在与当前元素属性值相同的元素
        const isDuplicate = uniqueArray.some(otherItem => otherItem[property] === item[property]);

        // 如果不同，则将当前元素添加到uniqueArray中
        if (!isDuplicate) {
            uniqueArray.push(item);
        }
    }

    // 返回去重后的结果
    return uniqueArray;
}
