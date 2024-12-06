# @tomjs/eslint

![npm](https://img.shields.io/npm/v/@tomjs/eslint) ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/eslint) ![NPM](https://img.shields.io/npm/l/@tomjs/eslint)

**English** | [中文](./README.zh_CN.md)

> Front-end project [eslint](https://zh-hans.eslint.org/) js/ts/node/vue/react code style specification configuration, `node>=18.18` is recommended.

## Usage

- Install dependencies

```bash
pnpm add -D eslint prettier @tomjs/eslint
```

- Modify the `eslint.config.{js,cjs,mjs}` configuration as needed, such as

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

- Supports `ts`, `js`, `node`, `node/js`, `vue`, `vue/js`, `vue2`, `vue2/js`, `react`, `react/js` configurations.

### Configuration

### node

`node` project configuration, inherits `ts`

Modify `eslint.config.cjs` configuration, such as

```js
const eslint = require('@tomjs/eslint');

module.exports = [...eslint.configs.node];
```

### vue

`vue` project configuration, inherits `ts`

Modify `eslint.config.cjs` configuration, such as

```js
const eslint = require('@tomjs/eslint');

module.exports = [...eslint.configs.vue];
```

### react

`react` project configuration, inherits `ts`

Modify `eslint.config.cjs` configuration, such as

```js
const eslint = require('@tomjs/eslint');

module.exports = [...eslint.configs.react];
```

## Version Dependencies

| @tomjs/eslint | eslint | node                                |
| ------------- | ------ | ----------------------------------- |
| >=4           | ^9.7.0 | ^18.18.0 \|\| ^20.9.0 \|\| >=21.1.0 |
| 3             | ^8.7.0 | ^18.18.0 \|\| >=20.0.0              |
