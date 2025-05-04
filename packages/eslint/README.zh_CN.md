# @tomjs/eslint

![npm](https://img.shields.io/npm/v/@tomjs/eslint) ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/eslint) ![NPM](https://img.shields.io/npm/l/@tomjs/eslint)

[English](./README.md) | **中文**

> 推荐使用 [@antfu/eslint-config](https://github.com/antfu/eslint-config)

## 使用

- 安装依赖

```bash
pnpm add -D eslint prettier @tomjs/eslint
```

- 根据需要修改 `eslint.config.{js,mjs,ts,mts}` 配置，如

- `eslint.config.ts`

```ts
import { defineConfig } from '@tomjs/eslint';

export default defineConfig();
```

## 版本依赖

| @tomjs/eslint | eslint  | node                                |
| ------------- | ------- | ----------------------------------- |
| >=5           | ^9.22.0 | ^18.18.0 \|\| ^20.9.0 \|\| >=21.1.0 |
| >=4           | ^9.7.0  | ^18.18.0 \|\| ^20.9.0 \|\| >=21.1.0 |
| 3             | ^8.7.0  | ^18.18.0 \|\| >=20.0.0              |
