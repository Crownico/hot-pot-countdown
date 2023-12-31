import { createApp } from "vue";

import "@/styles/index.scss";

// svg icons
import "virtual:svg-icons-register";

// element css
import "element-plus/theme-chalk/dark/css-vars.css";

import App from "./App.vue";
import router from "./router";
import pinia from "./stores";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
