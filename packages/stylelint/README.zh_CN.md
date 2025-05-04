# @tomjs/stylelint

![npm](https://img.shields.io/npm/v/@tomjs/stylelint) ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/stylelint) ![NPM](https://img.shields.io/npm/l/@tomjs/stylelint)

[English](./README.md) | **中文**

> 前端项目 [stylelint](https://stylelint.io/) 样式规范配置。

## 使用

- 安装依赖

```bash
pnpm add -D stylelint prettier @tomjs/stylelint
```

- 修改 `.stylelint.config.{js,ts,mjs,mts}` 配置

```js
export default {
  extends: ['tomjs/stylelint'],
};
```

#### 制作配置

```bash
pnpm add --save-peer prettier stylelint
pnpm add postcss postcss-html postcss-less postcss-scss
pnpm add stylelint-prettier stylelint-config-recommended stylelint-config-recommended-scss stylelint-config-recommended-vue
pnpm add stylelint-config-recess-order
```

- [stylelint-prettier](https://www.npmjs.com/package/stylelint-prettier)：将 Prettier 作为 stylelint 规则运行，并将差异报告为单个 stylelint 问题
- [stylelint-config-recommended](https://www.npmjs.com/package/stylelint-config-recommended)：它扩展了 stylelint-config-recommended，并开启了附加规则，以执行 CSS 规范中的现代约定
- [stylelint-config-recommended-scss](https://www.npmjs.com/package/stylelint-config-recommended-scss)：stylelint 的标准 scss 共享配置
- [stylelint-config-recommended-vue](https://www.npmjs.com/package/stylelint-config-recommended-vue)：stylelint 的推荐 vue 共享配置
- [stylelint-config-recess-order](https://www.npmjs.com/package/stylelint-config-recess-order)：一个 [Stylelint](https://github.com/stylelint/stylelint) 配置，它按照 [Recess](https://github.com/twitter/recess/blob/29bccc870b7b4ccaa0a138e504caf608a6606b59/lib/lint/strict-property-order.js) 和 Bootstrap [did](https://github.com/twbs/bootstrap/blob/f58997a0dae54dc98d11892afef9acb85bdc6a1e/.scss-lint.yml#L136)/[does](https://github.com/twbs/stylelint-config-twbs-bootstrap/blob/ad67be6e4ceb48809fa1dce13b7892f9d2018995/css/index.js#L38)的方式对 CSS 属性进行排序。

## 参考项目

- [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin)
