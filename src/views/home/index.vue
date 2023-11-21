<template>
    <div class="hotpot">
        <el-empty
            class="empty-description"
            :image="dogjpg"
            v-if="foodsStore.getSortedSelectedFoodsByTime.length === 0"
            description="点击下方按钮添加食材计时" />
        <CountdownBarList />
        <FoodsSelectedList
            :open-drawer="openDrawer"
            :foods-list="foodsStore.getCategoryFoods"
            @drawer-close="handleDrawerClose" />
        <!-- <div class="btn-add-food">
            <el-icon class="btn-l" @click="handleClickOpenDrawer" :size="20"><Plus /></el-icon>
        </div> -->
        <RunningLightButton class="btn-add-food" @click="handleClickOpenDrawer">
            <el-icon class="btn-icon" :size="20"><Plus /></el-icon>
        </RunningLightButton>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useFoodsStore } from "@/stores";
import CountdownBarList from "./cpns/CountdownBarList.vue";
import FoodsSelectedList from "./cpns/FoodsSelectedList.vue";
import dogjpg from "@/assets/images/dog.jpg";

const openDrawer = ref(false);
const foodsStore = useFoodsStore();

function handleClickOpenDrawer() {
    openDrawer.value = true;
}
function handleDrawerClose() {
    openDrawer.value = false;
}
</script>

<style scoped lang="scss">
@use "sass:color";

$btn-bg-color: #f7f7f7;
.hotpot {
    .empty-description {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);
        /* transition: all 0.5s; */
        /* animation: fade-out 1s ease;

        @keyframes fade-out {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        } */
    }
}
.btn-add-food {
    @include flex-center;

    position: fixed;
    right: 50%;
    bottom: 20vw;
    width: 80px;
    height: 30px;
    color: rgb(124 124 124);
    cursor: pointer;
    background-color: $btn-bg-color;
    border: 1px solid #efefef;
    border-radius: 10px;
    /* box-shadow:
        2.8px 2.8px 2.2px rgb(0 0 0 / 2%),
        6.7px 6.7px 5.3px rgb(0 0 0 / 2.8%),
        12.5px 12.5px 10px rgb(0 0 0 / 3.5%); */

    box-shadow:
        2.8px 2.8px 2.2px rgb(0 0 0 / 2%),
        6.7px 6.7px 5.3px rgb(0 0 0 / 2.8%);
    transform: translate(50%, 0);

    .btn-icon {
        color: #7c7c7c;
        text-shadow: 0 4px 10px rgb(0 0 0 / 30%);
    }
    &:hover {
        background-color: color.adjust($btn-bg-color, $lightness: 10%);
    }
    &:active {
        background-color: color.adjust($btn-bg-color, $lightness: -10%);
    }
}
</style>
