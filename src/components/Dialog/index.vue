<template>
    <div class="hotpot-dialog">
        <el-dialog
            v-model="dialogFormVisible"
            width="80vw"
            center
            title="添加/修改食材"
            destroy-on-close
            @close="emits('dialogClosed')">
            <AddFoodForm :categrory="props.category" @food-submit="handleFoodSubmit" @cancel="handleCancel" />
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { IngredientCategory } from "@/assets/data/Ingredients";
import AddFoodForm from "@/components/AddFoodForm/index.vue";

const props = defineProps<{
    dialogVisible: boolean;
    category: IngredientCategory;
}>();

const emits = defineEmits(["dialogClosed"]);

const dialogFormVisible = ref(false);
watch(
    () => props.dialogVisible,
    newVal => {
        if (newVal) {
            // 打开弹窗
            dialogFormVisible.value = true;
        } else {
            // 关闭弹窗
            dialogFormVisible.value = false;
        }
    }
);

const handleFoodSubmit = () => {
    dialogFormVisible.value = false;
};

const handleCancel = () => {
    dialogFormVisible.value = false;
};
</script>

<style scoped></style>
