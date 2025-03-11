import type { Linter } from 'eslint';
import node from '../node/typescript';
import typescript from '../typescript';

const config: Linter.Config[] = [...node, ...typescript];

export default config;
