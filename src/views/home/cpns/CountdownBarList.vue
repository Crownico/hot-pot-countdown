<template>
    <div class="hotpot-bar-list">
        <template v-for="item in foodsStore.getSortedSelectedFoodsByTime" :key="item.id">
            <CountdownBar :food-name="item.name" :countdown-total-time="item.cooking_time" />
        </template>
    </div>
</template>

<script setup lang="ts">
import CountdownBar from "@/components/CountdownBar/index.vue";
import { useFoodsStore } from "@/stores";

const foodsStore = useFoodsStore();
</script>

<style scoped lang="scss"></style>
