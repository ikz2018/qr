module.exports = {
    root: true,
    env: {
        es6: true,
        browser: true,
        es2021: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: "latest",
    },
    extends: [
        "plugin:vue/strongly-recommended",
        "eslint:recommended",
        "prettier",
    ],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": ["error", { singleQuote: true }],
        "no-console": "error",
        "no-debugger": "error",
        "vue/no-multiple-template-root": 0,
        "vue/multi-word-component-names": 0,
        "vue/no-v-html": 0,
        "vue/no-reserved-component-names": "warn",
        "import/no-unresolved": 0,
        "no-param-reassign": [
            "error",
            {
                props: false,
            },
        ],
        "vue/no-v-model-argument": "off",
        "import/prefer-default-export": 0,
        "no-magic-numbers": 0,
    },
};
