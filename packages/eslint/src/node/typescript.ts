import type { Linter } from 'eslint';
import typescript from '../typescript';
import javascript from './javascript';

const config: Linter.Config[] = [...javascript, ...typescript];

export default config;
