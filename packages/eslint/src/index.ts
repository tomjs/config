import type { Awaitable, ConfigNames, TypedFlatConfigItem } from '@antfu/eslint-config';
import type { Linter } from 'eslint';
import type { FlatConfigComposer } from 'eslint-flat-config-utils';
import type { OptionsConfig } from './types';
import { antfu } from '@antfu/eslint-config';
import merge from 'lodash.merge';

export * from './types';

/**
 * Construct an array of ESLint flat config items. Based on [@antfu/eslint-config](https://github.com/antfu/eslint-config)
 * @param options The options for generating the ESLint configurations.
 * @param userConfigs The user configurations to be merged with the generated configurations.
 * @returns The merged ESLint configurations.
 */
export function defineConfig(
  options?: OptionsConfig & Omit<TypedFlatConfigItem, 'files'>,
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
  const opts = merge({
    stylistic: {
      semi: true,
    },
    formatters: true,
    rules: {
      'n/prefer-global/process': 'off',

      'no-console': 'warn',
      'no-debugger': 'warn',
    },
  } as Omit<TypedFlatConfigItem, 'files'>, options);

  return antfu(opts, ...userConfigs);
}

export default defineConfig;
