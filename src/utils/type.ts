type typeStr =
    | "function"
    | "array"
    | "string"
    | "number"
    | "object"
    | "boolean"
    | "null"
    | "undefined"
    | "symbol"
    | "bigint";
/**
 * @description 判断数据类型
 * @param {Any} val 需要判断类型的数据
 * @return string (function | array | string | number | object | boolean | null | undefined | symbol)
 */
export function getType(val: any): typeStr {
    if (val === null) return "null";
    if (typeof val !== "object") return typeof val;
    else return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase() as typeStr;
}
