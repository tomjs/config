# @tomjs/tsconfig

![npm](https://img.shields.io/npm/v/%40tomjs/tsconfig) ![NPM](https://img.shields.io/npm/l/%40tomjs%2Ftsconfig)

前端项目 [tsconfig](https://www.typescriptlang.org/tsconfig) 配置。

## 使用说明

安装依赖

```bash
pnpm add -D @tomjs/tsconfig
```

### node 项目

修改 `tsconfig.node.json` 配置

```json
{
  "extends": "@tomjs/tsconfig/node.json",
  "compilerOptions": {
    "composite": true
  },
  "include": []
}
```

### vue 项目

修改 `tsconfig.json` 配置

- `vue.json`: 通用配置
- `vue-dom.json`: 宽松配置

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

### react 项目

修改 `tsconfig.json` 配置

- `react.json`: 通用配置
- `react-dom.json`: 宽松配置

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
