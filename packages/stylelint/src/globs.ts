/**
 * https://github.com/antfu/eslint-config/blob/5af1d9bf96609ab1d0a820cee0f83cd6948a0c5d/src/globs.ts#L56C14-L56C26
 */
export const GLOB_EXCLUDE = [
  '**/node_modules',
  '**/dist',

  '**/output',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/tmp',
  '**/.tmp',
  '**/.history',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.next',
  '**/.svelte-kit',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.cache',
  '**/.output',
  '**/.vite-inspect',
  '**/.yarn',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
];
