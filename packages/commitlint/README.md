# @tomjs/commitlint

![npm](https://img.shields.io/npm/v/%40tomjs/commitlint) ![NPM](https://img.shields.io/npm/l/%40tomjs%2Fcommitlint) ![npm package minimized gzipped size (scoped version select exports)](https://img.shields.io/bundlejs/size/%40tomjs/commitlint)

前端项目 [commitlint](https://commitlint.js.org/) 代码提交规范配置。

## 使用说明

- 安装依赖

```bash
pnpm add -D @commitlint/cli @tomjs/commitlint
```

- 修改 `.commitlintrc.{js,cjs}` 配置

```js
module.exports = {
  extends: [require.resolve('@tomjs/commitlint')],
};
```

- 结合其他库

结合 [husky](https://typicode.github.io/husky/) 和 [lint-staged](https://www.npmjs.com/package/lint-staged) 使用。

```bash
pnpm add -D husky lint-staged
```

`package.json` 的 `scripts` 增加 `prepare`

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

## 制作配置

```bash
pnpm add --save-peer @commitlint/cli
pnpm add @commitlint/config-conventional
```

- [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)：commitlint 规则配置
