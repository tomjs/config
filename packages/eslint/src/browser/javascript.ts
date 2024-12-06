import type { Linter } from 'eslint';
import globals from 'globals';
import javascript from '../javascript';

const config: Linter.Config[] = [
  ...javascript,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];

export default config;
