# @tomjs/eslint

![npm](https://img.shields.io/npm/v/@tomjs/eslint) ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/eslint) ![NPM](https://img.shields.io/npm/l/@tomjs/eslint)

**English** | [中文](./README.zh_CN.md)

> It is recommended to use [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## Usage

- Install dependencies

```bash
pnpm add -D eslint @tomjs/eslint
```

- Modify the `eslint.config.{js,mjs,ts,mts}` configuration as needed, such as

- `eslint.config.js`

```js
import { defineConfig } from '@tomjs/eslint';

export default defineConfig();
```

## Version Dependencies

| @tomjs/eslint | eslint  | node                                |
| ------------- | ------- | ----------------------------------- |
| >=5           | ^9.22.0 | ^18.18.0 \|\| ^20.9.0 \|\| >=21.1.0 |
| >=4           | ^9.7.0  | ^18.18.0 \|\| ^20.9.0 \|\| >=21.1.0 |
| 3             | ^8.7.0  | ^18.18.0 \|\| >=20.0.0              |
