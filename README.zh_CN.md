# tomjs/config

[English](./README.md) | **中文**

> 前端项目代码规范整理，方便快速搭建项目

## 使用

以 `pnpm` 为例

### 通用

```bash
pnpm add -D eslint @tomjs/eslint @tomjs/tsconfig
```

### commitlint

```bash
pnpm add -D simple-git-hooks lint-staged @commitlint/cli @tomjs/commitlint
```

### style

```bash
pnpm add -D stylelint @tomjs/stylelint
```

## Packages

| 名称                                                 | 版本                                                   | node                                                                      |
| ---------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| [@tomjs/commitlint](./packages/commitlint/README.md) | ![npm](https://img.shields.io/npm/v/@tomjs/commitlint) | ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/commitlint) |
| [@tomjs/eslint](./packages/eslint/README.md)         | ![npm](https://img.shields.io/npm/v/@tomjs/eslint)     | ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/eslint)     |
| [@tomjs/prettier](./packages/prettier/README.md)     | ![npm](https://img.shields.io/npm/v/@tomjs/prettier)   | ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/prettier)   |
| [@tomjs/stylelint](./packages/stylelint/README.md)   | ![npm](https://img.shields.io/npm/v/@tomjs/stylelint)  | ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/stylelint)  |
| [@tomjs/tsconfig](./packages/tsconfig/README.md)     | ![npm](https://img.shields.io/npm/v/@tomjs/tsconfig)   | ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/tsconfig)   |
