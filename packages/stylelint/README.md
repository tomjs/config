# @tomjs/stylelint

![npm](https://img.shields.io/npm/v/@tomjs/stylelint) ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/stylelint) ![NPM](https://img.shields.io/npm/l/@tomjs/stylelint)

**English** | [中文](./README.zh_CN.md)

> Front-end project [stylelint](https://stylelint.io/) style specification configuration.

## Usage

- Install dependencies

```bash
pnpm add -D stylelint prettier @tomjs/stylelint
```

- Modify `.stylelint.config.{js,ts,mjs,mts}` configuration

```js
export default {
  extends: ['tomjs/stylelint'],
};
```

#### Make configuration

```bash
pnpm add --save-peer prettier stylelint
pnpm add postcss postcss-html postcss-less postcss-scss
pnpm add stylelint-prettier stylelint-config-recommended stylelint-config-recommended-scss stylelint-config-recommended-vue
pnpm add stylelint-config-recess-order
```

- [stylelint-prettier](https://www.npmjs.com/package/stylelint-prettier): Run Prettier as a stylelint rule and report differences as a single stylelint issue
- [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard): It extends stylelint-config-recommended and turns on additional rules to enforce modernization in the CSS specification Agreement
- [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss): Standard scss shared configuration for stylelint
- [stylelint-config-recommended-vue](https://www.npmjs.com/package/stylelint-config-recommended-vue): stylelint’s recommended vue shared configuration
- [stylelint-order](https://www.npmjs.com/package/stylelint-order): A plug-in package that provides sorting-related prompt rules for stylelint
- [stylelint-config-recess-order](https://www.npmjs.com/package/stylelint-config-recess-order): A [Stylelint](https://github.com/stylelint/stylelint) config that sorts CSS properties the way [Recess](https://github.com/twitter/recess/blob/29bccc870b7b4ccaa0a138e504caf608a6606b59/lib/lint/strict-property-order.js) did and Bootstrap [did](https://github.com/twbs/bootstrap/blob/f58997a0dae54dc98d11892afef9acb85bdc6a1e/.scss-lint.yml#L136)/[does](https://github.com/twbs/stylelint-config-twbs-bootstrap/blob/ad67be6e4ceb48809fa1dce13b7892f9d2018995/css/index.js#L38).

## Reference project

- [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin)
