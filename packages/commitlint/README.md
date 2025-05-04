# @tomjs/commitlint

![npm](https://img.shields.io/npm/v/@tomjs/commitlint) ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/commitlint) ![NPM](https://img.shields.io/npm/l/@tomjs/commitlint)

**English** | [中文](./README.zh_CN.md)

> Front-end project [commitlint](https://commitlint.js.org/) Code submission specification configuration, `node>=18` is recommended.

## Usage

- Install dependencies

```bash
pnpm add -D @commitlint/cli @tomjs/commitlint
```

- Modify `commitlint.config.{js,mjs,ts,mts}` configuration

```js
export default {
  extends: ['@tomjs/commitlint'],
};
```

- Combine with other libraries

Used in conjunction with [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) and [lint-staged](https://www.npmjs.com/package/lint-staged).

```bash
pnpm add -D simple-git-hooks lint-staged
```

`scripts` of `package.json` added `prepare`

```json
{
  "scripts": {
    "prepare": "simple-git-hooks"
  }
}
```

## Make configuration

```bash
pnpm add --save-peer @commitlint/cli
pnpm add @commitlint/config-conventional
```

- [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional): commitlint rule configuration
