# @tomjs/eslint

![npm](https://img.shields.io/npm/v/%40tomjs/eslint) ![NPM](https://img.shields.io/npm/l/%40tomjs%2Feslint) ![npm package minimized gzipped size (scoped version select exports)](https://img.shields.io/bundlejs/size/%40tomjs/eslint)

前端项目 [eslint](https://zh-hans.eslint.org/) js/ts/vue 代码风格规范配置。**_主要用于个人学习，不推荐他人生产环境使用_**。

## 使用说明

- 安装依赖

```bash
pnpm add -D eslint prettier @tomjs/eslint
```

- 根据需要修改 `.eslintrc.{js,cjs}` 配置，如

```js
module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: [require.resolve('@tomjs/eslint')],
};
```

### default

基础配置，包含 eslint 基础配置，prettier、import、sort 等

#### 修改配置

修改 `.eslintrc.{js,cjs}` 配置，如

```js
module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: [require.resolve('@tomjs/eslint')],
};
```

#### 制作配置

```bash
pnpm add ---save-peer eslint prettier
pnpm add eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-simple-import-sort
```

- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier): 关闭所有不必要的或可能与 `Prettier` 冲突的规则
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import): 这个插件旨在支持 ES2015+（ES6+）导入/导出语法的提示，并防止文件路径和导入名称拼写错误的问题
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort): import 规范
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier): 兼容 prettier 规则

### typescript

基础配置，继承 `default`，增加 `typescript` 支持

#### 修改配置

修改 `.eslintrc.{js,cjs}` 配置，如

```js
module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: [require.resolve('@tomjs/eslint/typescript')],
};
```

#### 制作配置

```bash
pnpm add ---save-peer typescript
pnpm add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript
```

- [@typescript-eslint/eslint-plugin](https://typescript-eslint.io)：使 eslint 和 prettier 支持 TypeScript 的工具
- [@typescript-eslint/parser](https://typescript-eslint.io/architecture/parser)：一个 eslint 解析器，用于将 TypeScript 代码解析为 eslint 兼容的节点，以及提供支持 TypeScript 程序
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)：增加对 `eslint-plugin-import` 的 TypeScript 支持

### vue

vue 项目配置，继承 `default`

#### 修改配置

修改 `.eslintrc.{js,cjs}` 配置，如

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [require.resolve('@tomjs/eslint/vue')],
};
```

#### 制作配置

```bash
pnpm add vue-eslint-parser eslint-plugin-vue
```

- [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser)：解析自定义 `.vue` 文件
- [eslint-plugin-vue](https://eslint.vuejs.org)：vue.js 的官方 eslint 插件

### vue/typescript

vue 项目配置，继承 `typescript` 和 `vue`

#### 修改配置

修改 `.eslintrc.{js,cjs}` 配置，如

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [require.resolve('@tomjs/eslint/vue/typescript')],
};
```
