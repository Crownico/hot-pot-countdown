import { createApp } from "vue";

import "@/styles/index.scss";

// iconfont css
// import "@/assets/iconfont/iconfont.scss";
// font css
// import "@/assets/fonts/font.scss";
// svg icons
import "virtual:svg-icons-register";
// element icons
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// element css
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";

// import { autoUpdate } from "./utils/autoUpdate";

// 自动检测部署更新
// autoUpdate();

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(router);
app.use(pinia);
app.mount("#app");
