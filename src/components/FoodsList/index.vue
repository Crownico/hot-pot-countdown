<template>
    <div class="foods-list">
        <template v-for="item in props.foods" :key="item.category">
            <FoodsListCard :category="item.category" :foods="item.list" @add-food="handleClickAddFood" />
        </template>
        <div class="foods-list-btns">
            <el-button type="primary" text="重置菜单" @click="handleClickResetFoodDB">重置菜单</el-button>
        </div>
        <Dialog :dialog-visible="dialogFormVisible" :category="curFoodCategory" @dialog-closed="handleDialogClose" />
    </div>
</template>

<script setup lang="ts">
import { IngredientCategory } from "@/assets/data/Ingredients";
import FoodsListCard from "@/components/FoodsListCard/index.vue";
import Dialog from "@/components/Dialog/index.vue";
import { CategoryFoods, useFoodsStore } from "@/stores";
import { ref } from "vue";
import { message } from "@/utils/message";
import { ElMessageBox } from "element-plus";

const props = defineProps<{
    foods: CategoryFoods[];
}>();

const dialogFormVisible = ref(false);
const curFoodCategory = ref<IngredientCategory>("beans");
const handleClickAddFood = (category: IngredientCategory) => {
    dialogFormVisible.value = true;
    curFoodCategory.value = category;
};

const handleDialogClose = () => {
    dialogFormVisible.value = false;
};
const foodsStore = useFoodsStore();
const handleClickResetFoodDB = () => {
    ElMessageBox.confirm("添加和修改的食材将会被清空，确认重置吗?", "警告", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning"
    }).then(() => {
        foodsStore.resetAllfoods();
        message("重置成功", { type: "success" });
    });
};
</script>

<style scoped lang="scss">
.foods-list-btns {
    width: 100%;
    height: 40px;
    @include flex-center;
}
</style>
