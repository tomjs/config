import type { Config } from 'stylelint';

export default {
  extends: ['./index'],
  rules: {
    // #region 支持 rpx 单位
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],
    'declaration-property-value-no-unknown': [
      true,
      {
        ignoreProperties: {
          '/.+/': ['/rpx$/', '/\$/'],
        },
      },
    ],
    // #endregion
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['page'],
      },
    ],
  },
} as Config;
