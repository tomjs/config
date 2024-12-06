const eslint = require('@tomjs/eslint');

/**
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = [
  ...eslint,
  { ignores: ['public', 'dist', 'build', 'packages/*/es', 'packages/*/lib'] },
];
