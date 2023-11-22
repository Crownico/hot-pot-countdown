<template>
    <div>
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
import { ElNotification } from "element-plus";
import { getTimeState } from "./utils/time";
import { h } from "vue";
import catRose from "@/assets/images/cat-rose.jpg";

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
