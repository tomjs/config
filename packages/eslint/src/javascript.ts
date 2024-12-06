import eslint from '@eslint/js';
import type { Linter } from 'eslint';
import importPlugin from 'eslint-plugin-import';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import { GLOB_EXCLUDE } from './globs';

const config: Linter.Config[] = [
  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  prettierRecommended,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
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
          groups: [
            ['^\\u0000'],
            ['^node:', '^@?\\w', '^', '^\\.'],
            // Style imports.
            ['^.+\\.(scss|less|css)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      /************************* import *************************/
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'off',
      'import/named': 'off',
    },
    ignores: [...GLOB_EXCLUDE],
  },
  {
    files: ['.*rc.{js,cjs,mjs}', '*.config.{js,cjs,mjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];

export default config;
