<template>
    <div :class="['hotpot-countdown-bar', countdownState === 'overed' ? 'countdown--overed' : '']">
        <div :class="['hotpot-countdown-bar-inner']" @click="handleCountdownControl">
            <div class="countdown-controller">
                <SvgIcon v-if="countdownState === 'initial'" name="kaishi" class="controller-icon--start" />
                <SvgIcon v-if="countdownState === 'working'" name="tingzhi" class="controller-icon--reset" />
                <SvgIcon v-if="countdownState === 'overed'" name="chongxinbofang" class="controller-icon--again" />
            </div>
            <div class="bar--left">
                <div class="food--name">{{ countdownState === "overed" ? `${foodName} 开吃啦！` : foodName }}</div>
            </div>
            <div class="bar-right">
                <div class="countdown-time-wrapper">
                    <CountdownTimer
                        :control-signal="countdownControlSignal"
                        :seconds="countdownTotalTime"
                        @get-countdown-state="handleCountdownState"
                        @get-cur-countdown-time="handleCurCountdownTime">
                        <template #countdown="scope">
                            <div class="countdown-time">{{ formatSecondsToTime(scope.seconds).mmss }}</div>
                        </template>
                    </CountdownTimer>
                </div>
            </div>
            <!-- <div v-if="countdownState === 'overed'" class="bar-action--close"></div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import CountdownTimer, { CountdownSignal, CountdownState } from "@/components/CountdownTimer/index.vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
import { formatSecondsToTime } from "@/utils/dataFormat";
import { message } from "@/utils/message";
import { ref, watch } from "vue";

const props = defineProps<{
    foodName: string;
    countdownTotalTime: number;
}>();

// 获取倒计时状态
const countdownState = ref<CountdownState>("initial");
function handleCountdownState(state: CountdownState) {
    countdownState.value = state;
}

watch(countdownState, (newVal: CountdownState) => {
    if (newVal === "working") {
        message(`${props.foodName} 开始计时`, { type: "success", center: true });
    }
});

// 获取当前倒计时时间
const curCountdownPercent = ref<string>();
function handleCurCountdownTime(curTime: number) {
    curCountdownPercent.value = 100 - Math.round((curTime / props.countdownTotalTime) * 100) + "%";
}

// 发送控制信号控制倒计时
const countdownControlSignal = ref<CountdownSignal>("reset");
let _signal = 0;
function handleCountdownControl() {
    _signal++;
    if (_signal > 1) _signal = 0;
    const _controlSignal: Record<string, CountdownSignal> = {
        0: "reset",
        1: "start"
    };
    countdownControlSignal.value = _controlSignal[_signal];
}
</script>

<style scoped lang="scss">
$border-radius: 10px;

.hotpot-countdown-bar {
    position: relative;
    width: 90vw;
    margin: 20px auto;
    color: #3d3d3d;

    &:active {
        background-color: #f5f5f5;
    }

    &::before {
        content: "";
        position: absolute;
        height: 100%;
        width: v-bind(curCountdownPercent);
        z-index: 0;
        /* background-color: rgb(111, 240, 143); */
        /* background-color: #e9ccd3; */
        /* background-color: #63bbdd; */
        /* background-color: #eeaa9c; */
        background-color: #ed5126;
        border-radius: $border-radius;
        transition: all 0.5s ease-in-out;
    }
    .hotpot-countdown-bar-inner {
        @include flex-center(space-between);

        /* background: linear-gradient(145deg, #ffffff, #e5e2e2); */
        position: relative;
        box-sizing: border-box;
        height: 3.3333rem;
        padding: 0 4vw;
        font-size: 24px;
        font-weight: 700;
        text-shadow: 0 4px 10px rgb(0 0 0 / 30%);
        border-radius: $border-radius;
        /* border: 1px solid #cdcdcd; */

        /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1); */
        box-shadow:
            0.7px 0.8px 2.2px rgba(0, 0, 0, 0.02),
            1.7px 2px 5.3px rgba(0, 0, 0, 0.028),
            3.1px 3.8px 10px rgba(0, 0, 0, 0.035),
            5.6px 6.7px 17.9px rgba(0, 0, 0, 0.042),
            10.4px 12.5px 33.4px rgba(0, 0, 0, 0.05),
            25px 30px 80px rgba(0, 0, 0, 0.07);
        .countdown-controller {
            @include flex-center;
            cursor: pointer;
            fill: #3d3d3d;
            text-shadow: 0 4px 10px rgb(0 0 0 / 30%);

            /* 浏览器默认主题媒体查询 */
            @media (prefers-color-scheme: light) {
            }
            @media (prefers-color-scheme: dark) {
                /* fill: #ffffff; */
            }

            .controller-icon--start {
            }
            .controller-icon--reset {
            }
            .controller-icon--again {
            }
        }
        .bar-action--close {
            position: absolute;
            top: 0;
            right: 0;
            width: 10px;
            height: 10px;
            background-color: red;
            border-radius: 50%;
            transform: translate(50%, -50%);
        }
        .bar--left {
            .food--name {
            }
        }
        .bar-right {
            .countdown-time-wrapper {
                .countdown-time {
                }
            }
        }
    }
}
.countdown--overed {
    color: #f5f5f5;
    .countdown-controller {
        fill: #f5f5f5 !important;
    }
}
</style>
