# @tomjs/tsconfig

![npm](https://img.shields.io/npm/v/%40tomjs/tsconfig) ![NPM](https://img.shields.io/npm/l/%40tomjs%2Ftsconfig)

前端项目 [tsconfig](https://www.typescriptlang.org/tsconfig) 配置。**_主要用于个人学习，不推荐他人生产环境使用_**。

## 使用说明

- 安装依赖

```bash
pnpm add -D @tomjs/tsconfig
```

- node 项目 修改 `tsconfig.node.json` 配置

```json
{
  "extends": "@tomjs/tsconfig/node.json",
  "compilerOptions": {},
  "include": []
}
```

- vue 项目 修改 `tsconfig.app.json` 配置

```json
{
  "extends": "@tomjs/tsconfig/vue.json",
  "compilerOptions": {},
  "include": []
}
```

- 修改 `tsconfig.json` 配置

```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.node.json"
    },
    {
      "path": "./tsconfig.app.json"
    }
  ]
}
```
