import type { ESLintConfig } from 'eslint-define-config';

export default {
  env: {
    node: true,
    browser: false,
    es6: true,
  },
  extends: ['../javascript', 'plugin:n/recommended'],
  rules: {},
} as ESLintConfig;
