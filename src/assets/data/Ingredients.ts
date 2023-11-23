export type IngredientCategory =
    | "meat"
    | "fish"
    | "meatballs"
    | "vegetable"
    | "mushroom"
    | "beans"
    | "innards"
    | "noodle";

export const ingredientCategory: Record<IngredientCategory, string> = {
    meat: "肉类",
    fish: "海河鲜类",
    meatballs: "丸滑类",
    vegetable: "蔬菜",
    mushroom: "菌菇",
    beans: "豆制品",
    innards: "肉杂",
    noodle: "粉面制品"
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
        name: "鲜切牛肉",
        cooking_time: 100,
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
        cooking_time: 240,
        category: "meatballs",
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
        cooking_time: 100,
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
        cooking_time: 300,
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
        cooking_time: 300,
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
        cooking_time: 300,
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
        cooking_time: 240,
        category: "meatballs",
        description: "口感鲜嫩，富含脂肪和蛋白质。"
    },
    {
        id: 21,
        name: "虾滑",
        cooking_time: 180,
        category: "meatballs",
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
        cooking_time: 300,
        category: "noodle",
        description: "口感爽滑，富含碳水化合物。"
    },
    {
        id: 80,
        name: "莴笋",
        cooking_time: 60,
        category: "vegetable",
        description: "好吃"
    },
    {
        id: 81,
        name: "油麦菜",
        cooking_time: 60,
        category: "vegetable",
        description: "好吃"
    },
    {
        id: 82,
        name: "韭菜",
        cooking_time: 60,
        category: "vegetable",
        description: "好吃"
    },
    {
        id: 83,
        name: "蒜苗",
        cooking_time: 120,
        category: "vegetable",
        description: "好吃"
    },
    {
        id: 84,
        name: "白菜",
        cooking_time: 120,
        category: "vegetable",
        description: "好吃"
    },
    {
        id: 85,
        name: "芝麻菜",
        cooking_time: 120,
        category: "vegetable",
        description: "好吃"
    },
    {
        id: 86,
        name: "红薯苗",
        cooking_time: 120,
        category: "vegetable",
        description: "好吃"
    },
    {
        id: 87,
        name: "花菜",
        cooking_time: 180,
        category: "vegetable",
        description: "好吃"
    },
    {
        id: 88,
        name: "丝瓜",
        cooking_time: 180,
        category: "vegetable",
        description: "好吃"
    },
    {
        id: 89,
        name: "海白菜",
        cooking_time: 180,
        category: "vegetable",
        description: "好吃"
    },
    {
        id: 90,
        name: "胡萝卜",
        cooking_time: 180,
        category: "vegetable",
        description: "好吃"
    },
    {
        id: 91,
        name: "红薯",
        cooking_time: 180,
        category: "vegetable",
        description: "好吃"
    },
    {
        id: 92,
        name: "竹笋",
        cooking_time: 180,
        category: "vegetable",
        description: "好吃"
    },
    {
        id: 93,
        name: "牛肉滑",
        cooking_time: 180,
        category: "meatballs",
        description: "好吃"
    },
    {
        id: 94,
        name: "墨鱼滑",
        cooking_time: 180,
        category: "meatballs",
        description: "好吃"
    },
    {
        id: 95,
        name: "蟹黄鱼滑",
        cooking_time: 180,
        category: "meatballs",
        description: "好吃"
    },
    {
        id: 96,
        name: "包心丸",
        cooking_time: 240,
        category: "meatballs",
        description: "好吃"
    },
    {
        id: 97,
        name: "猪肉丸",
        cooking_time: 240,
        category: "meatballs",
        description: "好吃"
    },
    {
        id: 98,
        name: "四喜丸",
        cooking_time: 240,
        category: "meatballs",
        description: "好吃"
    },
    {
        id: 99,
        name: "香菜丸",
        cooking_time: 240,
        category: "meatballs",
        description: "好吃"
    },
    {
        id: 100,
        name: "墨鱼丸",
        cooking_time: 240,
        category: "meatballs",
        description: "好吃"
    },
    {
        id: 101,
        name: "潮州牛肉丸",
        cooking_time: 240,
        category: "meatballs",
        description: "好吃"
    },
    {
        id: 102,
        name: "香菇贡丸",
        cooking_time: 240,
        category: "meatballs",
        description: "好吃"
    },
    {
        id: 103,
        name: "鱼丸",
        cooking_time: 240,
        category: "meatballs",
        description: "好吃"
    },
    {
        id: 104,
        name: "吊龙",
        cooking_time: 15,
        category: "meat",
        description: "好吃"
    },
    {
        id: 105,
        name: "羊肉卷",
        cooking_time: 30,
        category: "meat",
        description: "好吃"
    },
    {
        id: 106,
        name: "牛肉卷",
        cooking_time: 30,
        category: "meat",
        description: "好吃"
    },
    {
        id: 107,
        name: "鲜切羊肉",
        cooking_time: 100,
        category: "meat",
        description: "好吃"
    },
    {
        id: 108,
        name: "牛舌",
        cooking_time: 45,
        category: "innards",
        description: "好吃"
    },
    {
        id: 109,
        name: "牛腩片",
        cooking_time: 45,
        category: "meat",
        description: "好吃"
    },
    {
        id: 110,
        name: "牛腱肉",
        cooking_time: 180,
        category: "meat",
        description: "好吃"
    },
    {
        id: 111,
        name: "腊肉",
        cooking_time: 180,
        category: "meat",
        description: "好吃"
    },
    {
        id: 112,
        name: "鸭胗",
        cooking_time: 180,
        category: "innards",
        description: "好吃"
    },
    {
        id: 113,
        name: "鸡胗",
        cooking_time: 180,
        category: "innards",
        description: "好吃"
    },
    {
        id: 114,
        name: "生蚝",
        cooking_time: 60,
        category: "fish",
        description: "好吃"
    },
    {
        id: 115,
        name: "蟹",
        cooking_time: 240,
        category: "fish",
        description: "好吃"
    },
    {
        id: 116,
        name: "扇贝",
        cooking_time: 240,
        category: "fish",
        description: "好吃"
    },
    {
        id: 117,
        name: "青贝",
        cooking_time: 240,
        category: "fish",
        description: "好吃"
    },
    {
        id: 118,
        name: "带子",
        cooking_time: 240,
        category: "fish",
        description: "好吃"
    },
    {
        id: 119,
        name: "鱼肚",
        cooking_time: 240,
        category: "fish",
        description: "好吃"
    },
    {
        id: 120,
        name: "花蛤",
        cooking_time: 240,
        category: "fish",
        description: "好吃"
    },
    {
        id: 121,
        name: "冻虾",
        cooking_time: 240,
        category: "fish",
        description: "好吃"
    },
    {
        id: 122,
        name: "牛蛙",
        cooking_time: 300,
        category: "fish",
        description: "好吃"
    },
    {
        id: 123,
        name: "面筋泡",
        cooking_time: 30,
        category: "beans",
        description: "好吃"
    },
    {
        id: 124,
        name: "油豆腐皮",
        cooking_time: 30,
        category: "beans",
        description: "好吃"
    },
    {
        id: 125,
        name: "老油条",
        cooking_time: 120,
        category: "noodle",
        description: "好吃"
    },
    {
        id: 126,
        name: "千叶豆腐",
        cooking_time: 120,
        category: "beans",
        description: "好吃"
    },
    {
        id: 127,
        name: "豆腐皮",
        cooking_time: 120,
        category: "beans",
        description: "好吃"
    },
    {
        id: 128,
        name: "油炸腐竹",
        cooking_time: 120,
        category: "beans",
        description: "好吃"
    },
    {
        id: 129,
        name: "水晶粉丝",
        cooking_time: 120,
        category: "noodle",
        description: "好吃"
    },
    {
        id: 130,
        name: "土豆粉",
        cooking_time: 120,
        category: "noodle",
        description: "好吃"
    },
    {
        id: 131,
        name: "苕皮",
        cooking_time: 180,
        category: "noodle",
        description: "好吃"
    },
    {
        id: 132,
        name: "魔芋",
        cooking_time: 180,
        category: "noodle",
        description: "好吃"
    },
    {
        id: 133,
        name: "魔芋丝",
        cooking_time: 180,
        category: "noodle",
        description: "好吃"
    },
    {
        id: 134,
        name: "龙须面",
        cooking_time: 300,
        category: "noodle",
        description: "好吃"
    },
    {
        id: 135,
        name: "年糕",
        cooking_time: 300,
        category: "noodle",
        description: "好吃"
    },
    {
        id: 136,
        name: "手工面",
        cooking_time: 300,
        category: "noodle",
        description: "好吃"
    },
    {
        id: 137,
        name: "培根",
        cooking_time: 120,
        category: "meat",
        description: "好吃"
    },
    {
        id: 138,
        name: "蟹肉棒",
        cooking_time: 120,
        category: "fish",
        description: "好吃"
    },
    {
        id: 139,
        name: "鱼豆腐",
        cooking_time: 120,
        category: "beans",
        description: "好吃"
    },
    {
        id: 140,
        name: "乌鸡卷",
        cooking_time: 180,
        category: "meat",
        description: "好吃"
    },
    {
        id: 141,
        name: "鸡翅尖",
        cooking_time: 300,
        category: "meat",
        description: "好吃"
    },
    {
        id: 142,
        name: "猪蹄",
        cooking_time: 300,
        category: "meat",
        description: "好吃"
    },
    {
        id: 143,
        name: "蛋饺",
        cooking_time: 300,
        category: "meat",
        description: "好吃"
    },
    {
        id: 144,
        name: "鸡翅中",
        cooking_time: 480,
        category: "meat",
        description: "好吃"
    },
    {
        id: 145,
        name: "排骨",
        cooking_time: 480,
        category: "meat",
        description: "好吃"
    }
];
