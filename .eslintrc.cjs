module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
        "plugin:prettier/recommended"
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module",
        jsxPragma: "React",
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ["@typescript-eslint", "vue"],
    /**
     * "off" 或 0    ==>  关闭规则
     * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
     * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
     */
    rules: {
        /** eslint (http://eslint.cn/docs/rules)*/

        "no-var": "error", // 要求使用 let 或 const 而不是 var
        "prefer-const": [
            // 优先使用 const
            "error",
            {
                destructuring: "any",
                ignoreReadBeforeAssign: false
            }
        ],

        /** typeScript (https://typescript-eslint.io/rules) */

        "@typescript-eslint/no-explicit-any": "off", // 可以使用 any 类型
        // 解决使用 require() Require statement not part of import statement. 的问题
        "@typescript-eslint/no-var-requires": "off",
        // 检查ts js中未使用的变量或参数，如果它们以“_”开头则忽略检查
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_"
            }
        ],
        "no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_"
            }
        ],

        /** vue (https://eslint.vuejs.org/rules)  */

        "vue/no-mutating-props": "error", // 不允许改变组件 prop
        "vue/multi-word-component-names": "off", // 要求组件名称始终为 “-” 链接的单词
        "vue/component-name-in-template-casing": [
            // 优先使用驼峰，element 组件除外
            "error",
            "PascalCase",
            {
                ignores: ["/^el-/", "/^router-/"],
                registeredComponentsOnly: false
            }
        ]
    }
};
