"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basic_json_1 = __importDefault(require("./rules/basic.json"));
const etc_json_1 = __importDefault(require("./rules/etc.json"));
const functional_json_1 = __importDefault(require("./rules/functional.json"));
const import_json_1 = __importDefault(require("./rules/import.json"));
const jsx_a11y_json_1 = __importDefault(require("./rules/jsx-a11y.json"));
const node_json_1 = __importDefault(require("./rules/node.json"));
const react_json_1 = __importDefault(require("./rules/react.json"));
const security_json_1 = __importDefault(require("./rules/security.json"));
const shopify_json_1 = __importDefault(require("./rules/shopify.json"));
const simple_import_sort_json_1 = __importDefault(require("./rules/simple-import-sort.json"));
const sonarjs_json_1 = __importDefault(require("./rules/sonarjs.json"));
const typescript_json_1 = __importDefault(require("./rules/typescript.json"));
const unicorn_json_1 = __importDefault(require("./rules/unicorn.json"));
const react_hooks_json_1 = __importDefault(require("./rules/react-hooks.json"));
module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    ignorePatterns: [
        'node_modules/',
        '*.js',
        '*.scss.d.ts',
        '*.css.d.ts'
    ],
    extends: [
        'standard',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:sonarjs/recommended',
        'plugin:clean-codestyle/recommended',
        'plugin:etc/recommended',
        'plugin:@microsoft/sdl/recommended',
        'plugin:react-hooks/recommended',
    ],
    plugins: [
        'no-autofix',
        'import',
        'simple-import-sort',
        'react',
        'jsx-a11y',
        '@typescript-eslint',
        '@shopify',
        'sonarjs',
        'clean-codestyle',
        'etc',
        '@microsoft/sdl',
        'security',
        'unicorn',
        'functional',
        'react-hooks',
        "sort-keys-fix"
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: './',
        sourceType: 'module'
    },
    rules: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, basic_json_1.default), etc_json_1.default), functional_json_1.default), import_json_1.default), jsx_a11y_json_1.default), node_json_1.default), shopify_json_1.default), react_json_1.default), security_json_1.default), simple_import_sort_json_1.default), sonarjs_json_1.default), typescript_json_1.default), unicorn_json_1.default), react_hooks_json_1.default),
    settings: {
        'import/resolver': {
            typescript: {}
        },
        react: {
            version: 'detect'
        }
    }
};
