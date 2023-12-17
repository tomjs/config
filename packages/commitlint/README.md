# @tomjs/commitlint

![npm](https://img.shields.io/npm/v/@tomjs/commitlint) ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/commitlint) ![NPM](https://img.shields.io/npm/l/@tomjs/commitlint)

Front-end project [commitlint](https://commitlint.js.org/) Code submission specification configuration, `node>=18` is recommended.

## Usage

- Install dependencies

```bash
pnpm add -D @commitlint/cli @tomjs/commitlint
```

- Modify `.commitlintrc.{js,cjs}` configuration

```js
module.exports = {
  extends: [require.resolve('@tomjs/commitlint')],
};
```

- Combine with other libraries

Used in conjunction with [husky](https://typicode.github.io/husky/) and [lint-staged](https://www.npmjs.com/package/lint-staged).

```bash
pnpm add -D husky lint-staged
```

`scripts` of `package.json` added `prepare`

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

## Make configuration

```bash
pnpm add --save-peer @commitlint/cli
pnpm add @commitlint/config-conventional
```

- [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional): commitlint rule configuration
