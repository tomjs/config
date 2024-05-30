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
  extends: ['../javascript', 'plugin:vue/vue3-recommended'],
  rules: {
    // vue
    'vue/no-reserved-component-names': 'off',

    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/one-component-per-file': 'off',
    'vue/attributes-order': 'error',
    'vue/custom-event-name-casing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
} as ESLintConfig;
