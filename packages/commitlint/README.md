# @tomjs/commitlint

前端项目 [commitlint](https://commitlint.js.org/) 代码提交规范配置

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

## 制作配置

```bash
pnpm add --save-peer @commitlint/cli
pnpm add @commitlint/config-conventional
```

- [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)：commitlint 规则配置
