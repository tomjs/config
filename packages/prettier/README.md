# @tomjs/prettier

![npm](https://img.shields.io/npm/v/%40tomjs/prettier) ![NPM](https://img.shields.io/npm/l/%40tomjs%2Fprettier) ![npm package minimized gzipped size (scoped version select exports)](https://img.shields.io/bundlejs/size/%40tomjs/prettier)

前端项目 [prettier](https://prettier.io/) 代码格式化规范配置。**_主要用于个人学习，不推荐他人生产环境使用_**。

## 使用说明

- 安装依赖

```bash
pnpm add -D prettier @tomjs/prettier
```

- 修改 `.prettierrc.{js,cjs}` 配置

```js
module.exports = require.resolve('@tomjs/prettier');
```
