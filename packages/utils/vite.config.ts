import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: 'src/index.ts',
      name: 'tomjs',
      formats: ['es', 'cjs'],
      fileName: format => (format === 'es' ? 'index.mjs' : `index.js`),
    },
  },
  plugins: [dts({ rollupTypes: true })],
});
