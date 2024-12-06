# @tomjs/eslint

![npm](https://img.shields.io/npm/v/@tomjs/eslint) ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/eslint) ![NPM](https://img.shields.io/npm/l/@tomjs/eslint)

[English](./README.md) | **中文**

> 前端项目 [eslint](https://zh-hans.eslint.org/) js/ts/node/vue/react 代码风格规范配置，推荐 `node>=18.18`。

## 使用

- 安装依赖

```bash
pnpm add -D eslint prettier @tomjs/eslint
```

- 根据需要修改 `eslint.config.{js,cjs,mjs}` 配置，如

- `eslint.config.cjs`

```js
const eslint = require('@tomjs/eslint');

module.exports = [...eslint.configs.ts];
```

- `eslint.config.mjs`

```js
import eslint from '@tomjs/eslint/ts';

export default [...eslint];
```

- 支持 `ts`、`js`、`node`、`node/js`、`vue`、`vue/js`、`vue2`、`vue2/js`、`react`、`react/js`、`browser`、`browser/js` 配置。

## 配置

### node

`node` 项目配置，继承 `ts`

修改 `eslint.config.cjs` 配置，如

```js
const eslint = require('@tomjs/eslint');

module.exports = [...eslint.configs.node];
```

### vue

`vue` 项目配置，继承 `ts` 配置

修改 `eslint.config.cjs` 配置，如

```js
const eslint = require('@tomjs/eslint');

module.exports = [...eslint.configs.vue];
```

### react

`react` 项目配置，继承 `ts`

修改 `eslint.config.cjs` 配置，如

```js
const eslint = require('@tomjs/eslint');

module.exports = [...eslint.configs.react];
```

## 版本依赖

| @tomjs/eslint | eslint | node                                |
| ------------- | ------ | ----------------------------------- |
| >=4           | ^9.7.0 | ^18.18.0 \|\| ^20.9.0 \|\| >=21.1.0 |
| 3             | ^8.7.0 | ^18.18.0 \|\| >=20.0.0              |
