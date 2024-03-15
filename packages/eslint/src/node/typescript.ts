import type { ESLintConfig } from 'eslint-define-config';

export default {
  env: {
    node: true,
    es6: true,
  },
  extends: ['./javascript', '../typescript'],
  rules: {},
} as ESLintConfig;
