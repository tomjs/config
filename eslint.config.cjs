const eslint = require('@tomjs/eslint');

/**
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = [
  ...eslint.configs.node,
  { ignores: ['public', 'dist', 'build', 'packages/*/es', 'packages/*/lib'] },
];
