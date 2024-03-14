import type { ESLintConfig } from 'eslint-define-config';

export default {
  env: {
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  extends: ['./index', '../typescript'],
  rules: {},
} as ESLintConfig;
