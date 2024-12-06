import type { Linter } from 'eslint';
import node from 'eslint-plugin-n';
import nodeImport from 'eslint-plugin-node-import';
import globals from 'globals';
import javascript from '../javascript';

const config: Linter.Config[] = [
  ...javascript,
  node.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      'node-import': nodeImport,
    },
    rules: {
      // disable rules
      'n/shebang': 'off',
      'n/hashbang': 'off',
      'n/no-process-exit': 'off',
      // enable rules
      'n/no-path-concat': 'error',
      // disallow imports of built-in Node.js modules without the node: prefix
      'node-import/prefer-node-protocol': 'error',
      // fix bug
      'n/no-missing-import': 'off',
      'n/no-missing-require': 'off',
      'n/no-extraneous-import': 'off',
      'n/no-extraneous-require': 'off',
      'n/no-unpublished-require': 'off',
      'n/no-unpublished-import': 'off',
    },
  },
];

export default config;
