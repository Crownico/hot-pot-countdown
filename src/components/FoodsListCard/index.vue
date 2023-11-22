<template>
    <div class="hotpot-foodslist-card">
        <div class="card-header">
            <div class="header--title">{{ ingredientCategory[props.category] }}：</div>
            <div class="header-btn">
                <div class="btn-add-food" @click="emits('add-food', props.category)">
                    <el-icon color="#999"><Plus /></el-icon>
                </div>
            </div>
        </div>
        <div class="card-content">
            <div class="content-inner">
                <template v-for="food in props.foods" :key="food.id">
                    <div
                        :class="{
                            'content-item': true,
                            'content-item--selected': foodsStore.selectedFoods.includes(food)
                        }"
                        @click="selectedFood(food)">
                        {{ food.name }}
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ingredientCategory, type IngredientCategory, type Ingredient } from "@/assets/data/Ingredients";
import { useFoodsStore } from "@/stores";

const props = defineProps<{
    category: IngredientCategory;
    foods: Ingredient[];
}>();

const emits = defineEmits(["add-food"]);

const foodsStore = useFoodsStore();

function selectedFood(food: Ingredient) {
    if (foodsStore.selectedFoods.includes(food)) {
        foodsStore.selectedFoods = foodsStore.selectedFoods.filter(item => item.id !== food.id);
    } else {
        foodsStore.selectedFoods.push(food);
    }
}
</script>

<style scoped lang="scss">
.hotpot-foodslist-card {
    margin-bottom: 15px;
    .card-header {
        @include flex-center(space-between);

        padding: 10px 0;

        /* font-size: 18px; */
        .header--title {
        }
        .header-btn {
            .btn-add-food {
                fill: #d5d5d5;
            }
        }
    }
    .card-content {
        margin-top: 5px;
        .content-inner {
            display: flex;
            flex-flow: row wrap;
            .content-item {
                @include flex-center;

                box-sizing: border-box;
                height: 28px;
                padding: 5px 11px;
                margin: 5px;
                font-size: 14px;
                line-height: 1;
                color: #606266;
                text-align: center;
                white-space: nowrap;
                vertical-align: middle;
                cursor: pointer;
                user-select: none;
                background-color: #ffffff;
                border: 1px solid #dcdfe6;
                border-radius: 20px;
                outline: 0;
                transition: 0.1s;
            }
            .content-item--selected {
                color: #409eff;
                background-color: #ecf5ff;
                border-color: #c6e2ff;
            }
        }
    }
}
</style>
