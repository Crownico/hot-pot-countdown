export type IngredientCategory = "meat" | "fish" | "vegetable" | "mushroom" | "beans" | "innards" | "noodle";

export const ingredientCategory: Record<IngredientCategory, string> = {
    meat: "肉类",
    fish: "海河鲜",
    vegetable: "蔬菜",
    mushroom: "菌菇",
    beans: "豆制品",
    innards: "肉杂",
    noodle: "粉面"
};

export interface Ingredient {
    id: number;
    name: string;
    cooking_time: number;
    category: IngredientCategory;
    description: string;
}
export const lngredients: Ingredient[] = [
    {
        id: 22,
        name: "肥牛",
        cooking_time: 8,
        category: "meat",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 23,
        name: "羔羊肉",
        cooking_time: 10,
        category: "meat",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 24,
        name: "肥羊",
        cooking_time: 8,
        category: "meat",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 25,
        name: "现切牛肉",
        cooking_time: 180,
        category: "meat",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 26,
        name: "双椒牛肉",
        cooking_time: 180,
        category: "meat",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 27,
        name: "麻辣牛肉",
        cooking_time: 60,
        category: "meat",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 28,
        name: "撒尿牛丸",
        cooking_time: 180,
        category: "meat",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 29,
        name: "五花肉",
        cooking_time: 60,
        category: "meat",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 30,
        name: "午餐肉",
        cooking_time: 60,
        category: "meat",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 31,
        name: "火腿肠",
        cooking_time: 10,
        category: "meat",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 32,
        name: "脆皮肠",
        cooking_time: 60,
        category: "meat",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 33,
        name: "仔排",
        cooking_time: 480,
        category: "meat",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 34,
        name: "毛肚",
        cooking_time: 10,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 35,
        name: "牛上脑",
        cooking_time: 10,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 36,
        name: "千层肚",
        cooking_time: 60,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 37,
        name: "牛黄喉",
        cooking_time: 120,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 38,
        name: "牛骨髓",
        cooking_time: 120,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 39,
        name: "牛鞭花",
        cooking_time: 180,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 40,
        name: "牛蹄筋",
        cooking_time: 300,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 41,
        name: "大刀腰片",
        cooking_time: 60,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 42,
        name: "猪黄喉",
        cooking_time: 60,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 43,
        name: "肺片",
        cooking_time: 60,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 44,
        name: "猪天堂",
        cooking_time: 120,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 45,
        name: "猪鼻筋",
        cooking_time: 120,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 46,
        name: "肥肠",
        cooking_time: 180,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 47,
        name: "猪脑花",
        cooking_time: 480,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 48,
        name: "鹅肠",
        cooking_time: 10,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 49,
        name: "鸭肠",
        cooking_time: 10,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 50,
        name: "鹌鹑蛋",
        cooking_time: 60,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 51,
        name: "鸭郡肝",
        cooking_time: 180,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 52,
        name: "鲜鸭舌",
        cooking_time: 180,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 53,
        name: "去骨鸭掌",
        cooking_time: 300,
        category: "innards",
        description: "口感鲜嫩，富含蛋白质"
    },
    {
        id: 1,
        name: "巴沙鱼片",
        cooking_time: 60,
        category: "fish",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 2,
        name: "乌鱼片",
        cooking_time: 60,
        category: "fish",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 3,
        name: "小鲍鱼",
        cooking_time: 120,
        category: "fish",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 4,
        name: "鱿鱼须",
        cooking_time: 120,
        category: "fish",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 5,
        name: "黄辣丁",
        cooking_time: 120,
        category: "fish",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 6,
        name: "泥鳅",
        cooking_time: 120,
        category: "fish",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 7,
        name: "鱼泡",
        cooking_time: 120,
        category: "fish",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 8,
        name: "鳕鱼",
        cooking_time: 180,
        category: "fish",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 9,
        name: "鳝鱼",
        cooking_time: 180,
        category: "fish",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 10,
        name: "鲜青虾",
        cooking_time: 180,
        category: "fish",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 11,
        name: "武昌鱼",
        cooking_time: 180,
        category: "fish",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 12,
        name: "耗儿鱼",
        cooking_time: 300,
        category: "fish",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 13,
        name: "墨鱼仔",
        cooking_time: 300,
        category: "fish",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 14,
        name: "平菇",
        cooking_time: 180,
        category: "mushroom",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 15,
        name: "香菇",
        cooking_time: 180,
        category: "mushroom",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 16,
        name: "海鲜菇",
        cooking_time: 180,
        category: "mushroom",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 17,
        name: "金针菇",
        cooking_time: 180,
        category: "mushroom",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 18,
        name: "茶树菇",
        cooking_time: 180,
        category: "mushroom",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 19,
        name: "虾饺",
        cooking_time: 120,
        category: "fish",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 20,
        name: "虾丸",
        cooking_time: 120,
        category: "fish",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 21,
        name: "虾滑",
        cooking_time: 180,
        category: "fish",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 54,
        name: "生菜",
        cooking_time: 10,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 55,
        name: "青笋片",
        cooking_time: 10,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 56,
        name: "龙须菜",
        cooking_time: 10,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 57,
        name: "海带芽",
        cooking_time: 10,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 58,
        name: "贡菜",
        cooking_time: 60,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 59,
        name: "折耳根",
        cooking_time: 60,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 60,
        name: "茼蒿",
        cooking_time: 120,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 61,
        name: "笋片",
        cooking_time: 120,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 62,
        name: "豆芽",
        cooking_time: 120,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 63,
        name: "冬瓜",
        cooking_time: 120,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 64,
        name: "木耳",
        cooking_time: 120,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 65,
        name: "土豆",
        cooking_time: 180,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 66,
        name: "白萝卜",
        cooking_time: 120,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 67,
        name: "娃娃菜",
        cooking_time: 120,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 69,
        name: "藕片",
        cooking_time: 180,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 70,
        name: "山药",
        cooking_time: 240,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 71,
        name: "玉米",
        cooking_time: 300,
        category: "vegetable",
        description: "口感鲜嫩，富含维生素"
    },
    {
        id: 72,
        name: "鲜豆皮",
        cooking_time: 60,
        category: "beans",
        description: "口感软嫩，富含植物蛋白和多种矿物质。"
    },
    {
        id: 73,
        name: "豆腐",
        cooking_time: 120,
        category: "beans",
        description: "口感软嫩，富含植物蛋白和多种矿物质。"
    },
    {
        id: 74,
        name: "海带",
        cooking_time: 180,
        category: "fish",
        description: "口感软嫩，富含维生素和多种矿物质。"
    },
    {
        id: 75,
        name: "鸭血",
        cooking_time: 180,
        category: "innards",
        description: "口感软嫩，富含维生素和多种矿物质。"
    },
    {
        id: 76,
        name: "宽粉",
        cooking_time: 180,
        category: "noodle",
        description: "味道浓郁，富含碳水。"
    },
    {
        id: 77,
        name: "面饼",
        cooking_time: 240,
        category: "noodle",
        description: "味道浓郁，富含碳水。"
    },
    {
        id: 78,
        name: "牛百叶",
        cooking_time: 20,
        category: "innards",
        description: "口感爽脆，富含蛋白质和多种矿物质。"
    },
    {
        id: 79,
        name: "粉丝",
        cooking_time: 5,
        category: "noodle",
        description: "口感爽滑，富含碳水化合物。"
    }
];
