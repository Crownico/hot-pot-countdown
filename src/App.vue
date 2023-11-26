<template>
    <div class="hot-pot">
        <Header />
        <router-view v-slot="{ Component, route }">
            <!-- <Transition appear name="fade-transform" mode="out-in"> -->
            <Component :is="Component" :key="route.path" />
            <!-- </Transition> -->
        </router-view>
    </div>
</template>

<script setup lang="ts">
import Header from "@/layout/Header/index.vue";
import { getTimeState } from "./utils/time";
import { h } from "vue";
import catRose from "@/assets/images/cat-rose.jpg";
import { useFollowSysTheme } from "@/hook/useFollowSysTheme";

useFollowSysTheme();

ElNotification({
    // title: getTimeState(),
    customClass: "hotpot-notification",
    duration: 5000,
    offset: 30,
    // dangerouslyUseHTMLString: true,
    // message: `<img :src="catRose" width="30px" alt="">`
    message: h("div", { className: "hotpot-notification-message" }, [
        h("img", { src: catRose, className: "hotpot-notification-img", alt: "" }),
        h("span", {}, getTimeState())
    ])
});
</script>

<style>
#app {
    background-color: var(--el-bg-color);
}
.hotpot-notification {
    width: fit-content;
}
.hotpot-notification-message {
    display: flex;
    align-items: center;
    font-size: large;
    font-weight: bold;
}
.hotpot-notification-img {
    width: 10vw;
    margin-right: 10px;
    overflow: hidden;
    border-radius: 10px;
}
</style>
