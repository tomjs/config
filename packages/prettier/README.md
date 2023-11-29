# @tomjs/prettier

![npm](https://img.shields.io/npm/v/%40tomjs/prettier) ![node-current (scoped)](https://img.shields.io/node/v/%40tomjs/prettier) ![NPM](https://img.shields.io/npm/l/%40tomjs%2Fprettier)

前端项目 [prettier](https://prettier.io/) 代码格式化规范配置，推荐 `node>=16`。

## 使用说明

- 安装依赖

```bash
pnpm add -D prettier @tomjs/prettier
```

- 修改 `.prettierrc.{js,cjs}` 配置

```js
module.exports = require.resolve('@tomjs/prettier');
```
