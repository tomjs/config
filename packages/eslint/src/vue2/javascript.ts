import type { ESLintConfig } from 'eslint-define-config';

export default {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: ['.vue'],
  },
  extends: ['../javascript', 'plugin:vue/recommended'],
  rules: {
    // vue
    'vue/require-default-prop': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/one-component-per-file': 'off',
    'vue/require-prop-types': 'off',
    'vue/no-mutating-props': 'off',
    'vue/attributes-order': 'error',
  },
} as ESLintConfig;
