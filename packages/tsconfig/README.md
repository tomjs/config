# @tomjs/tsconfig

![npm](https://img.shields.io/npm/v/@tomjs/tsconfig) ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/tsconfig) ![NPM](https://img.shields.io/npm/l/@tomjs/tsconfig)

**English** | [中文](./README.zh_CN.md)

> Based on [@vue/tsconfig](https://github.com/vuejs/tsconfig)'s [tsconfig](https://www.typescriptlang.org/tsconfig), it supports node, vue, and react projects.

## use

Install dependencies

```bash
pnpm add -D @tomjs/tsconfig
```

### node project

Modify `tsconfig.node.json` configuration

```json
{
  "extends": "@tomjs/tsconfig/node.json",
  "compilerOptions": {
    "composite": true
  },
  "include": []
}
```

### vue project

Modify `tsconfig.json` configuration

- `vue.json`: common configuration
- `vue-dom.json`: loose configuration

```json
{
  "extends": "@tomjs/tsconfig/vue.json",
  "compilerOptions": {},
  "include": [],
  "references": [
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
```

### react project

Modify `tsconfig.json` configuration

- `react.json`: common configuration
- `react-dom.json`: loose configuration

```json
{
  "extends": "@tomjs/tsconfig/react.json",
  "compilerOptions": {},
  "include": [],
  "references": [
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
```
