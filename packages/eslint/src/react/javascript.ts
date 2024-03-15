import type { ESLintConfig } from 'eslint-define-config';

export default {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['../javascript', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: [],
  rules: {
    'react/react-in-jsx-scope': 'off',

    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
} as ESLintConfig;
