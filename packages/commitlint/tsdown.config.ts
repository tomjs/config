import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['./src/index.ts'],
  target: 'node18',
  clean: true,
  skipNodeModulesBundle: true,
  shims: true,
  dts: false,
  publint: {
    strict: true,
  },
  outputOptions: {
    exports: 'named',
  },
});
