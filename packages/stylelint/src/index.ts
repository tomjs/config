import type { Config } from 'stylelint';

const config: Config = {
  extends: ['@tomjs/stylelint/config'],
  plugins: ['stylelint-prettier'],
};

export default config;
