import { defineStore, createPinia } from "pinia";
import piniaPersistConfig from "@/config/piniaPersist";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { type Ingredient, lngredients, type IngredientCategory } from "@/assets/data/Ingredients";

interface FoodState {
    allfoods: Ingredient[];
    selectedFoods: Ingredient[];
}
export interface CategoryFoods {
    category: IngredientCategory;
    list: Ingredient[];
}

const userFoodsDB = localStorage.getItem("userFoodsDB");

export const useFoodsStore = defineStore({
    id: "foodsState",
    state: (): FoodState => ({
        allfoods: userFoodsDB ? JSON.parse(userFoodsDB) : lngredients,
        selectedFoods: []
    }),
    getters: {
        getCategoryFoods(state: FoodState) {
            const categoryFoods: CategoryFoods[] = [];
            const map = new Map<IngredientCategory, Ingredient[]>();
            state.allfoods.forEach(item => {
                if (!map.has(item.category)) map.set(item.category, []);
                map.set(item.category, [...(map.get(item.category) as []), item]);
            });
            map.forEach((value, key) => {
                categoryFoods.push({ category: key, list: value });
            });
            return categoryFoods;
        },
        getSortedSelectedFoodsByTime(state: FoodState) {
            return state.selectedFoods.sort((a, b) => {
                return a.cooking_time - b.cooking_time;
            });
        }
    },
    actions: {
        // 添加食材，添加同名食材将会覆盖原数据
        addFood(food: Ingredient) {
            const index = this.allfoods.findIndex(item => item.name === food.name);
            if (index === -1) this.allfoods.push(food);
            this.allfoods[index] = food;
        },
        // 重置用户数据
        resetAllfoods() {
            localStorage.removeItem("userFoodsDB");
            window.location.reload();
            // this.allfoods = lngredients;
            // this.selectedFoods = [];
        }
    },
    persist: piniaPersistConfig("userFoodsDB", ["allfoods"])
});

// piniaPersist(持久化)
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

export default pinia;
