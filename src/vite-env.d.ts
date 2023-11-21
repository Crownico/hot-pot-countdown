/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    // 更多环境变量...
    readonly VITE_APP_API_BASE_URL: string;
    readonly VITE_APP_API_TIMEOUT: number;
    readonly VITE_APP_UPLOAD_BASE_URL: string;
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare module "nprogress";

/** ts 工具类型 */
declare type Recordable<T = any> = Record<string, T>;

/** 解决 dragEvent.dataTransfer.items 上的 webkitGetAsEntry 方法可能会重命名为 getAsEntry 所导致的兼容问题*/
interface DataTransferItem {
    getAsEntry: () => FileSystemEntry;
}

/** 补充 FileSystemEntry 实例相关属性的类型 */
interface FileSystemEntry {
    createReader: () => FileSystemDirectoryReader;
    file: (resolveFile: (file: File) => void, rejectFile?: (err: Error) => void) => void;
}
