<template>
    <div class="foods-list">
        <template v-for="item in props.foods" :key="item.category">
            <FoodsListCard :category="item.category" :foods="item.list" @add-food="handleClickAddFood" />
        </template>
        <div class="foods-list-btns">
            <el-button type="primary" link @click="handleClickResetFoodDB">重置菜单</el-button>
            <el-button type="primary" link @click="handleClickImportFoodDB">导入菜单</el-button>
        </div>
        <Dialog :dialog-visible="dialogFormVisible" :category="curFoodCategory" @dialog-closed="handleDialogClose" />
    </div>
</template>

<script setup lang="ts">
import { Ingredient, IngredientCategory } from "@/assets/data/Ingredients";
import FoodsListCard from "@/components/FoodsListCard/index.vue";
import Dialog from "@/components/Dialog/index.vue";
import { CategoryFoods, useFoodsStore } from "@/stores";
import { h, ref } from "vue";
import { message } from "@/utils/message";
import { useExcel } from "@/hook/useExcel";

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
    ElMessageBox.confirm(
        h("p", null, [
            h("span", null, "重置食材列表前，建议"),
            h(
                "span",
                { style: "color: teal;font-weight: 700; cursor: pointer;", onClick: handleBackupFoodDB },
                " 导出备份 "
            ),
            h("span", null, "食材数据，以免添加的食材丢失，确认重置吗?")
        ]),
        "警告",
        {
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            type: "warning"
        }
    )
        .then(() => {
            foodsStore.resetAllfoods();
            message("重置成功", { type: "success" });
        })
        .catch(() => {});
};

const { exportExcel, parseExcel } = useExcel();

const handleBackupFoodDB = () => {
    exportExcel(foodsStore.allfoods, "火锅食材列表");
    message("导出食材列表成功", { type: "success" });
};

const handleClickImportFoodDB = async () => {
    let input: HTMLInputElement | undefined;
    const _getFile = () => {
        return new Promise<File>(resolve => {
            if (document) {
                input = document.createElement("input");
                input.type = "file";
                // 只接收 xlsx xls 文件
                input.accept = ".xls,.xlsx";
                input.style.display = "none";

                input.onchange = (event: Event) => {
                    const result = event.target as HTMLInputElement;
                    if (result.files) resolve(result.files[0]);
                };
                input.click();
            }
        });
    };
    const file: File = await _getFile();

    const { sheetsJSON } = await parseExcel<Ingredient>(file);
    const importedFoods = sheetsJSON[0];
    foodsStore.applyImportedFoods(importedFoods);

    message("导入成功", { type: "success" });
};
</script>

<style scoped lang="scss">
.foods-list-btns {
    width: 100%;
    height: 40px;

    @include flex-center;
}
</style>
