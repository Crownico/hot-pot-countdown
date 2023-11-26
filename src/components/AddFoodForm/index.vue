<template>
    <div class="hotpot-add-food">
        <el-form
            ref="formRef"
            :rules="rules"
            label-position="top"
            label-width="80vw"
            :model="formDataObject"
            style="max-width: 460px">
            <el-form-item label="食材名称：" prop="name">
                <el-input v-model.trim="formDataObject.name" autofocus placeholder="输入已存在的食材，则为编辑" />
            </el-form-item>
            <el-form-item label="倒计时间（秒）：" prop="cooking_time">
                <el-input type="number" v-model="formDataObject.cooking_time" />
            </el-form-item>
            <el-form-item label="种类：" prop="category">
                <el-input :model-value="categoryField" disabled />
            </el-form-item>
            <el-form-item label="描述：" prop="description">
                <el-input v-model="formDataObject.description" />
            </el-form-item>
            <el-form-item>
                <div class="form-btns">
                    <el-button @click="emits('cancel')">取消</el-button>
                    <el-button type="primary" @click="onSubmit(formRef)">添加</el-button>
                </div>
            </el-form-item>
        </el-form>
        <div class="explanation-text">*数据存储在本地，切换设备将会丢失数据</div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useFoodsStore } from "@/stores";
import { ingredientCategory, type Ingredient, type IngredientCategory } from "@/assets/data/Ingredients";
import { message } from "@/utils/message";
import { FormInstance, FormRules } from "element-plus";

const props = defineProps<{
    categrory: IngredientCategory;
}>();

const emits = defineEmits(["foodSubmit", "cancel"]);

const formDataObject = reactive({
    name: "",
    cooking_time: "",
    description: ""
});

const categoryField = ref();
categoryField.value = ingredientCategory[props.categrory];

const rules = reactive<FormRules>({
    name: [
        { required: true, message: "请输入食材名", trigger: "blur" },
        { min: 1, max: 5, message: "请输入有效长度", trigger: "blur" }
    ],
    cooking_time: [
        { required: true, message: "请输入烹饪时间", trigger: "blur" },
        { min: 1, message: "请输入有效时间", trigger: "blur" }
    ]
});

const foodsStore = useFoodsStore();
const formRef = ref<FormInstance>();
const onSubmit = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate(valid => {
        if (valid) {
            emits("foodSubmit");
            const food: Ingredient = {
                id: Date.now(),
                name: formDataObject.name,
                cooking_time: +formDataObject.cooking_time,
                description: formDataObject.description,
                category: props.categrory
            };
            const _isExist = foodsStore.isExist(food);
            foodsStore.addFood(food);
            if (_isExist) {
                message(`编辑${formDataObject.name}成功`, { type: "success" });
            } else {
                message(`添加${formDataObject.name}成功`, { type: "success" });
            }
        } else {
            message(`添加失败`, { type: "error" });
            return false;
        }
    });
};
</script>

<style scoped lang="scss">
.hotpot-add-food {
    .form-btns {
        width: 100%;
        margin: 10px 0;

        @include flex-center(space-around);
    }
    .explanation-text {
        font-size: 12px;
        color: #999999;
    }
}
</style>
