import type { UserConfig } from '@commitlint/types';

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-trim': [2, 'always'],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
    'header-max-length': [0],
    'header-max-length-plus': [2, 'always', 120],
  },
  plugins: [
    {
      rules: {
        'header-max-length-plus': (parsed, when, value) => {
          const maxLength = value || 200;
          const header = parsed.header || '';
          const length = header.length;
          return [
            header.trim().startsWith('chore: release')
              ? true
              : length <= maxLength,
            `header must not be longer than ${maxLength} characters, current length is ${length}`,
          ];
        },
      },
    },
  ],
} as UserConfig;
