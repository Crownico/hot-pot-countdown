<template>
    <div class="hotpot-foods-select-list">
        <el-drawer v-model="drawer" direction="btt" @close="emits('drawerClose')" size="60%">
            <template #header>
                <h3 class="food-list-header">食材列表</h3>
            </template>
            <template #default>
                <FoodsList class="food-list" :foods="props.foodsList" />
            </template>
        </el-drawer>
    </div>
</template>

<script setup lang="ts">
import FoodsList from "@/components/FoodsList/index.vue";
import { CategoryFoods } from "@/stores";
import { ref, watch } from "vue";

const props = defineProps<{
    openDrawer: boolean;
    foodsList: CategoryFoods[];
}>();
const emits = defineEmits(["drawerClose"]);
const drawer = ref(false);
watch(
    () => props.openDrawer,
    val => (drawer.value = val)
);
</script>

<style scoped lang="scss">
.hotpot-foods-select-list {
    letter-spacing: 2px;
    :deep() .el-drawer__header {
        padding-top: 0;
        margin-bottom: 0;
    }
    .food-list-header {
    }
    .food-list {
    }
}
</style>
