import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

const packageJson = require('./package.json');

/**
 * the isDev function looks for --config-dev flag
 * and if found returns true
 * it is for executing diff commands for diff enviornments
 * @returns boolean
 */
const isDev = () => !!process.argv.find((el) => el === '--config-dev');

export default [
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom'],
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: isDev(),
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: isDev(),
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      postcss(),
      !isDev() ? terser() : null,
      typescript({ tsconfig: './tsconfig.json', sourceMap: true }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
