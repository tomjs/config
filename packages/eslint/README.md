# @tomjs/eslint

![npm](https://img.shields.io/npm/v/@tomjs/eslint) ![node-current (scoped)](https://img.shields.io/node/v/@tomjs/eslint) ![NPM](https://img.shields.io/npm/l/@tomjs/eslint)

Front-end project [eslint](https://zh-hans.eslint.org/) js/ts/vue/react code style specification configuration, `node>=16` is recommended.

## Usage

- Install dependencies

```bash
pnpm add -D eslint prettier @tomjs/eslint
```

- Modify the `.eslintrc.{js,cjs}` configuration as needed, such as

```js
module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: [require.resolve('@tomjs/eslint')],
};
```

### default

Basic configuration, including eslint basic configuration, prettier, import, sort, etc.

#### Change setting

Modify the `.eslintrc.{js,cjs}` configuration, such as

```js
module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: [require.resolve('@tomjs/eslint')],
};
```

#### Make configuration

```bash
pnpm add ---save-peer eslint prettier
pnpm add eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-simple-import-sort
```

- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier): Turn off all rules that are unnecessary or may conflict with `Prettier`
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import): This plugin is designed to support ES2015+ (ES6+) import/export syntax hints and prevent file paths and imports Misspelled name issue
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort): import specification
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier): Compatible with prettier rules

### typescript

Basic configuration, inherit `default`, add `typescript` support

#### Change setting

Modify the `.eslintrc.{js,cjs}` configuration, such as

```js
module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: [require.resolve('@tomjs/eslint/typescript')],
};
```

#### Make configuration

```bash
pnpm add ---save-peer typescript
pnpm add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript
```

- [@typescript-eslint/eslint-plugin](https://typescript-eslint.io): Tools to enable eslint and prettier to support TypeScript
- [@typescript-eslint/parser](https://typescript-eslint.io/architecture/parser): An eslint parser that parses TypeScript code into eslint-compatible nodes and provides support for TypeScript programs
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript): Added TypeScript support for `eslint-plugin-import`

### vue

vue project configuration, inherit `default`

#### Change setting

Modify the `.eslintrc.{js,cjs}` configuration, such as

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [require.resolve('@tomjs/eslint/vue')],
};
```

#### Make configuration

```bash
pnpm add vue-eslint-parser eslint-plugin-vue
```

- [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser): Parse custom `.vue` files
- [eslint-plugin-vue](https://eslint.vuejs.org): The official eslint plug-in for vue.js

### vue/typescript

vue project configuration, inherits `typescript` and `vue`

#### Change setting

Modify the `.eslintrc.{js,cjs}` configuration, such as

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [require.resolve('@tomjs/eslint/vue/typescript')],
};
```

### react

react project configuration, inherit `default`

#### Change setting

Modify the `.eslintrc.{js,cjs}` configuration, such as

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [require.resolve('@tomjs/eslint/react')],
};
```

#### Make configuration

```bash
pnpm add eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): react rules
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): react hooks rules
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): Verify that the component can refresh the update rules quickly and safely

### react/typescript

React project configuration, inherits `typescript` and `react`

#### Change setting

Modify the `.eslintrc.{js,cjs}` configuration, such as

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [require.resolve('@tomjs/eslint/react/typescript')],
};
```
