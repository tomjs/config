import type { Linter } from 'eslint';
import globals from 'globals';
import typescript from '../../typescript';
import javascript from './javascript';

const config: Linter.Config[] = [
  ...javascript,
  ...typescript.map(s => ({
    ...s,
    files: ['.*rc.{js,cjs,mjs}', '*.config.{js,cjs,mjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  })),
];

export default config;
