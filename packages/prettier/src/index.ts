import type { Config } from 'prettier';

/**
 * prettier 配置文档 https://prettier.io/docs/en/options
 */
export default {
  // 超过最大值换行
  printWidth: 100,
  // 缩进字节数
  tabWidth: 2,
  // 缩进不使用tab，使用空格
  useTabs: false,
  // 句尾添加分号
  semi: true,
  // 使用单引号代替双引号
  singleQuote: true,
  // 在对象或数组最后一个元素后面是加逗号
  trailingComma: 'all',
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  bracketSpacing: true,
  // 将多行 HTML（HTML、JSX、Vue、Angular）元素的 > 放在最后一行的末尾，而不是单独放在下一行
  bracketSameLine: false,
  // 箭头函数，只有一个参数的时候，不需要括号
  arrowParens: 'avoid',
  // 文本样式进行折行
  proseWrap: 'never',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 在 Linux 和 macOS 以及 git 存储库中常见的换行符\n
  endOfLine: 'lf',
  // Vue 文件中 <script> 和 <style> 标记内的代码不缩进
  vueIndentScriptAndStyle: false,
  overrides: [
    {
      files: ['tsconfig.json', 'tsconfig.*.json'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
} as Config;
