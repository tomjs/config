import type { ESLintConfig } from 'eslint-define-config';

export default {
  env: {
    node: true,
    browser: false,
    es6: true,
  },
  extends: ['../javascript', 'plugin:n/recommended'],
  plugins: ['node-import'],
  rules: {
    // disable rules
    'n/shebang': 'off',
    'n/hashbang': 'off',
    'n/no-missing-import': 'off',
    'n/no-missing-require': 'off',
    'n/no-process-exit': 'off',
    // enable rules
    'n/no-path-concat': 'error',
    // disallow imports of built-in Node.js modules without the node: prefix
    'node-import/prefer-node-protocol': 'error',
  },
} as ESLintConfig;
