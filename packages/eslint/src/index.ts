import js from './javascript';
import nodeJs from './node/javascript';
import node from './node/typescript';
import reactJs from './react/javascript';
import react from './react/typescript';
import ts from './typescript';
import vueJs from './vue/javascript';
import vue from './vue/typescript';
import vue2Js from './vue2/javascript';
import vue2 from './vue2/typescript';

export const meta = {
  name: '@tomjs/eslint',
  version: require('../package.json').version,
};

const configs = {
  ts,
  js,
  node,
  'node/js': nodeJs,
  vue,
  'vue/js': vueJs,
  vue2,
  'vue2/js': vue2Js,
  react,
  'react/js': reactJs,
};

export default {
  meta,
  configs,
};
