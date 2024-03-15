# tomjs

**English** | [中文](./README.zh_CN.md)

> Standard organization of front-end project codes to facilitate quick project construction

## Instructions for use

Take `pnpm` as an example

### General

```bash
pnpm add -D eslint prettier @tomjs/eslint @tomjs/prettier @tomjs/tsconfig
```

### commitlint

```bash
pnpm add -D husky lint-staged @commitlint/cli @tomjs/commitlint
```

### style

```bash
pnpm add -D stylelint @tomjs/stylelint
```

## Packages

| name | version | node |
| --- | --- | --- |
| [@tomjs/commitlint](./packages/commitlint/README.md) | ![npm](https://img.shields.io/npm/v/@tomjs/commitlint) | ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/commitlint) |
| [@tomjs/eslint](./packages/eslint/README.md) | ![npm](https://img.shields.io/npm/v/@tomjs/eslint) | ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/eslint) |
| [@tomjs/prettier](./packages/prettier/README.md) | ![npm](https://img.shields.io/npm/v/@tomjs/prettier) | ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/prettier) |
| [@tomjs/stylelint](./packages/stylelint/README.md) | ![npm](https://img.shields.io/npm/v/@tomjs/stylelint) | ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/stylelint) |
| [@tomjs/tsconfig](./packages/tsconfig/README.md) | ![npm](https://img.shields.io/npm/v/@tomjs/tsconfig) | ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/tsconfig) |
