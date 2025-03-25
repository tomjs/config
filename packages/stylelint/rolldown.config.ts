import { defineConfig } from 'rolldown';

export default defineConfig([
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/index.mjs',
      },
      {
        format: 'cjs',
        file: 'dist/index.cjs',
      },
    ],
  },
  {
    input: 'src/config.js',
    output: [
      {
        format: 'esm',
        file: 'dist/config.mjs',
      },
      {
        format: 'cjs',
        file: 'dist/config.cjs',
      },
    ],
  },
]);
