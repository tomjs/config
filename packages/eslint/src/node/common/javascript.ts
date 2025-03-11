import type { Linter } from 'eslint';
import globals from 'globals';
import javascript from '../javascript';

const config: Linter.Config[] = javascript.map(s => ({
  ...s,
  files: ['.*rc.{js,cjs,mjs}', '*.config.{js,cjs,mjs}'],
  languageOptions: {
    globals: {
      ...globals.node,
    },
  },
}));

export default config;
