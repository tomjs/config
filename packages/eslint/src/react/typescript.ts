import type { ESLintConfig } from 'eslint-define-config';

export default {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['./index', '../typescript'],
  plugins: ['react-refresh'],
  rules: {},
} as ESLintConfig;
