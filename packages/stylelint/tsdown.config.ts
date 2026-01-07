import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: './src/**/*.ts',
  target: 'node18',
  clean: true,
  skipNodeModulesBundle: true,
  shims: true,
  dts: true,
  publint: true,
  fixedExtension: false,
  outputOptions: {
    exports: 'named',
  },
});
