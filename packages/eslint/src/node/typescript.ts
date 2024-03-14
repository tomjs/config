import type { ESLintConfig } from 'eslint-define-config';

export default {
  env: {
    node: true,
    es6: true,
  },
  extends: ['./index', '../typescript'],
  rules: {},
} as ESLintConfig;
