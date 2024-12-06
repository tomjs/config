import type { Linter } from 'eslint';
import pluginVue from 'eslint-plugin-vue';

const config: Linter.Config[] = [
  ...pluginVue.configs['flat/vue2-recommended'],
  {
    files: ['*.vue'],
    rules: {
      'vue/require-default-prop': 'off',
      'vue/no-reserved-component-names': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/one-component-per-file': 'off',
      'vue/require-prop-types': 'off',
      'vue/no-mutating-props': 'off',
      'vue/attributes-order': 'error',
    },
  },
];

export default config;
