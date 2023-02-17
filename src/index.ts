import basicRules from './rules/basic.json';
import etcRules from './rules/etc.json';
import functionalRules from './rules/functional.json';
import jsxA11yRules from './rules/jsx-a11y.json';
import nodeRules from './rules/node.json';
import reactRules from './rules/react.json';
import securityRules from './rules/security.json';
import shopitfyRules from './rules/shopify.json';
import simpleImportSortRules from './rules/simple-import-sort.json';
import sonarjsRules from './rules/sonarjs.json';
import typescriptRules from './rules/typescript.json';
import unicornRules from './rules/unicorn.json';
import reactHooks from './rules/react-hooks.json';

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
    'plugin:import/typescript',
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
    'sort-keys-fix'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
    sourceType: 'module'
  },
  rules: {
    ...basicRules,
    ...etcRules,
    ...functionalRules,
    ...jsxA11yRules,
    ...nodeRules,
    ...shopitfyRules,
    ...reactRules,
    ...securityRules,
    ...simpleImportSortRules,
    ...sonarjsRules,
    ...typescriptRules,
    ...unicornRules,
    ...reactHooks,
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
