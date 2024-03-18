import type { ESLintConfig } from 'eslint-define-config';

export default {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import', 'simple-import-sort'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.*rc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  rules: {
    /**************************** base ****************************/
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    'no-empty': ['error', { allowEmptyCatch: true }],

    /************************* import sort *************************/
    'simple-import-sort/imports': [
      'error',
      {
        // The default grouping, but with type imports first as a separate group.
        groups: [
          [
            '^node:.*\\u0000$',
            '^\\w.*\\u0000$',
            '^@\\w.*\\u0000$',
            '^#\\w.*\\u0000$',
            '^[^.].*\\u0000$',
            '^\\..*\\u0000$',
            '^node:',
            '^vue',
            '^vite',
            '^\\w',
            '^@\\w',
            '^#\\w',
            '^\\u0000',
            '^',
            '^\\.',
          ],
          // Style imports.
          ['^.+\\.(scss|less|css)$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
} as ESLintConfig;
