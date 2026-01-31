import type { Config } from 'stylelint';
import { IGNORE_FILES } from './globs';

export * from './globs';

const config: Config = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recess-order',
    'stylelint-config-recommended-vue',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  ignoreFiles: [...IGNORE_FILES],
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: [
        'stylelint-config-recommended-scss',
        'stylelint-config-recommended-vue/scss',
      ],
    },
  ],
  rules: {
    'alpha-value-notation': 'number',
    'color-function-notation': null,
    'font-family-no-missing-generic-family-keyword': null,
    'import-notation': null,
    'media-feature-range-notation': 'prefix',
    'named-grid-areas-no-invalid': null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'no-empty-source': null,
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'selector-class-pattern': null,
    'selector-not-notation': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extends',
          'ignores',
          'include',
          'mixin',
          'if',
          'else',
          'media',
          'for',
          'at-root',
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'each',
          'use',
          'forward',
          'return',
        ],
      },
    ],
  },
};

export default config;
