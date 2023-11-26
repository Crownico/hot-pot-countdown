import { onUnmounted, ref } from "vue";

/**
 * 自动跟随浏览器主题(light | dark) 为 html 添加 dark class
 * @returns theme 当前系统主题
 */
export const useFollowSysTheme = () => {
    const themeMedia = window.matchMedia("(prefers-color-scheme: light)");
    const theme = ref<"light" | "dark">();

    const setTheme = (theme: "light" | "dark") => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    theme.value = themeMedia.matches ? "light" : "dark";

    const listener = (e: MediaQueryListEvent) => {
        theme.value = e.matches ? "light" : "dark";
        setTheme(theme.value);
    };

    setTheme(theme.value);

    themeMedia.addEventListener("change", listener);

    onUnmounted(() => themeMedia.removeEventListener("change", listener));

    return theme;
};
