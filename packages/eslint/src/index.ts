import browserJs from './browser/javascript';
import browser from './browser/typescript';
import { GLOB_EXCLUDE } from './globs';
import js from './javascript';
import nodeJs from './node/javascript';
import node from './node/typescript';
import ts from './typescript';
import vueJs from './vue/javascript';
import vue from './vue/typescript';
import vue2Js from './vue2/javascript';
import vue2 from './vue2/typescript';

export const meta = {
  name: '@tomjs/eslint',
  version: require('../package.json').version,
};

export { GLOB_EXCLUDE };

export const configs = {
  ts,
  js,
  node,
  'node/js': nodeJs,
  vue,
  'vue/js': vueJs,
  vue2,
  'vue2/js': vue2Js,
  browser,
  'browser/js': browserJs,
};

export default {
  meta,
  configs,
};
