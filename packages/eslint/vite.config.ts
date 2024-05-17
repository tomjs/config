import { defineConfig } from 'vite';
import { buildPlugin } from 'vite-plugin-build';

export default defineConfig({
  plugins: [
    buildPlugin({
      fileBuild: {},
    }),
  ],
});
