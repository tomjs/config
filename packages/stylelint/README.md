# @tomjs/stylelint

![npm](https://img.shields.io/npm/v/@tomjs/stylelint) ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/stylelint) ![NPM](https://img.shields.io/npm/l/@tomjs/stylelint)

**English** | [中文](./README.zh_CN.md)

> Front-end project [stylelint](https://stylelint.io/) style specification configuration.

## Usage

- Install dependencies

```bash
pnpm add -D stylelint prettier @tomjs/stylelint
```

- Modify `.stylelintrc.{js,cjs}` configuration

```js
module.exports = {
  extends: [require.resolve('@tomjs/stylelint')],
};
```

#### Make configuration

```bash
pnpm add --save-peer prettier stylelint
pnpm add postcss postcss-html postcss-less postcss-scss
pnpm add stylelint-prettier stylelint-config-standard stylelint-config-standard-scss stylelint-config-recommended-vue
pnpm add stylelint-order stylelint-config-property-sort-order-smacss
```

- [stylelint-prettier](https://www.npmjs.com/package/stylelint-prettier): Run Prettier as a stylelint rule and report differences as a single stylelint issue
- [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard): It extends stylelint-config-recommended and turns on additional rules to enforce modernization in the CSS specification Agreement
- [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss): Standard scss shared configuration for stylelint
- [stylelint-config-recommended-vue](https://www.npmjs.com/package/stylelint-config-recommended-vue): stylelint’s recommended vue shared configuration
- [stylelint-order](https://www.npmjs.com/package/stylelint-order): A plug-in package that provides sorting-related prompt rules for stylelint
- [stylelint-config-property-sort-order-smacss](https://www.npmjs.com/package/stylelint-config-property-sort-order-smacss): Based on [SMACSS](http://smacss .com/) method attribute sorting

## Reference project

- [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin)
