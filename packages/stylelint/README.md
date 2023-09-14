# @tomjs/stylelint

前端项目 [stylelint](https://stylelint.io/) 样式规范配置。

## 使用说明

- 安装依赖

```bash
pnpm add -D stylelint prettier @tomjs/stylelint
```

- 修改 `.stylelintrc.{js,cjs}` 配置

```js
module.exports = {
  extends: [require.resolve('@tomjs/stylelint')],
};
```

### vue

vue 项目 stylelint 配置

#### 修改配置

修改 `.stylelintrc.{js,cjs}` 配置，如

```js
module.exports = {
  extends: [require.resolve('@tomjs/stylelint/vue')],
};
```

#### 制作配置

```bash
pnpm add --save-peer prettier stylelint
pnpm add postcss postcss-html postcss-less postcss-scss
pnpm add stylelint-prettier stylelint-config-standard stylelint-config-standard-scss stylelint-config-recommended-vue
pnpm add stylelint-order stylelint-config-property-sort-order-smacss
```

- [stylelint-prettier](https://www.npmjs.com/package/stylelint-prettier)：将 Prettier 作为 stylelint 规则运行，并将差异报告为单个 stylelint 问题
- [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard)：它扩展了 stylelint-config-recommended，并开启了附加规则，以执行 CSS 规范中的现代约定
- [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss)：stylelint 的标准 scss 共享配置
- [stylelint-config-recommended-vue](https://www.npmjs.com/package/stylelint-config-recommended-vue)：stylelint 的推荐 vue 共享配置
- [stylelint-order](https://www.npmjs.com/package/stylelint-order)：为 stylelint 提供的与排序相关的提示规则的插件包
- [stylelint-config-property-sort-order-smacss](https://www.npmjs.com/package/stylelint-config-property-sort-order-smacss)：基于 [SMACSS](http://smacss.com/) 方法的属性排序

## 参考项目

- [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin)
