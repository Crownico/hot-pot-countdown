<template>
    <slot name="countdown" :seconds="curCountdown" />

    <!-- <button @click="startCountdown()">开始\继续</button>
    <button @click="pauseCountdown()">暂停</button>
    <button @click="resetCountdown()">重置</button> -->
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
// import { countDown } from "@/utils/time";

interface Props {
    seconds: number;
    controlSignal: CountdownSignal;
}
const props = withDefaults(defineProps<Props>(), {
    seconds: 20
});

const emits = defineEmits(["getCountdownState", "getCurCountdownTime"]);

// 倒计时时间（seconds）
const curCountdown = ref(props.seconds);

// 倒计时状态
export type CountdownState = "pause" | "working" | "overed" | "initial";
const curCountdownState = ref<CountdownState>();

// 发送倒计时结束状态
watch(curCountdown, (newValue: number) => {
    emits("getCurCountdownTime", newValue);
    if (props.seconds !== 0 && newValue === 0) emits("getCountdownState", "overed");
});

// 倒计时工具函数
function countDown(seconds: number, callback: (curSeconds: number) => void, interval_ms = 1000) {
    let count = 0;
    let timeCounter: any = null;
    const startTime = Date.now();

    function fn() {
        count++;
        const gap = Date.now() - (startTime + count * interval_ms);
        const nextTime = interval_ms - gap <= 0 ? 0 : interval_ms - gap;
        const remainTime = seconds * 1000 - (Date.now() - startTime);
        callback(Math.round(remainTime / 1000));
        if (remainTime <= 0 || curCountdownState.value !== "working") {
            clearTimeout(timeCounter);
            return;
        }
        clearTimeout(timeCounter);
        timeCounter = setTimeout(fn, nextTime);
    }

    timeCounter = setTimeout(fn, interval_ms);
}

// 倒计时控制信号伺服器
export type CountdownSignal = "start" | "pause" | "reset";
watch(
    () => props.controlSignal,
    (newValue: CountdownSignal) => {
        const servomotor = {
            start: startCountdown,
            pause: pauseCountdown,
            reset: resetCountdown
        };
        newValue && servomotor[newValue]();
    }
);
function startCountdown() {
    emits("getCountdownState", "working");
    curCountdownState.value = "working";
    countDown(curCountdown.value, (seconds: number) => {
        if (curCountdownState.value === "working") curCountdown.value = seconds;
    });
}

function pauseCountdown() {
    emits("getCountdownState", "pause");
    curCountdownState.value = "pause";
}

function resetCountdown() {
    emits("getCountdownState", "initial");
    curCountdownState.value = "initial";
    curCountdown.value = props.seconds;
}
</script>

<style scoped></style>
