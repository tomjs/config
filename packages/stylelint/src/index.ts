import type { Config } from 'stylelint';
import { GLOB_EXCLUDE } from './globs';

const config: Config = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-html/vue',
    'stylelint-config-recess-order',
  ],
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.{css,scss}'],
      customSyntax: 'postcss-scss',
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
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'deep'],
      },
    ],
  },
  ignoreFiles: [...GLOB_EXCLUDE, '**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};

export default config;
