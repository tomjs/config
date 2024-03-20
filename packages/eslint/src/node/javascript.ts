import type { ESLintConfig } from 'eslint-define-config';

export default {
  env: {
    node: true,
    browser: false,
    es6: true,
  },
  extends: ['../javascript', 'plugin:n/recommended'],
  rules: {
    // disable rules
    'n/shebang': 'off',
    'n/hashbang': 'off',
    'n/no-missing-import': 'off',
    'n/no-missing-require': 'off',
    'n/no-process-exit': 'off',
    // enable rules
    'n/no-path-concat': 'error',
  },
} as ESLintConfig;
