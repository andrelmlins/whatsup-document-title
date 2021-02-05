import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import image from '@rollup/plugin-image';
import html from '@rollup/plugin-html';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import pkg from './package.json';

const watch = process.env.ROLLUP_WATCH;

const app = {
  input: 'docs/index.ts',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'build/bundle.js',
  },
  plugins: [
    typescript(),
    postcss({
      extract: true,
      extract: 'bundle.css',
      modules: true,
      namedExports(name) {
        return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      },
      use: ['sass'],
    }),
    babel({
      extensions: ['.ts', '.tsx'],
      include: ['docs/**/*', 'src/**/*'],
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    image(),
    resolve(),
    commonjs(),
    html({
      title: 'Whatsup project',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      ],
    }),
    watch && serve({ port: 4000, contentBase: 'build' }),
    watch && livereload(),
  ],
  watch: {
    clearScreen: false,
  },
};

const library = [
  {
    input: 'src/index.ts',
    plugins: [
      typescript(),
      babel({
        extensions: ['.ts', '.tsx'],
        include: ['src/**/*'],
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
      commonjs(),
    ],
    output: {
      exports: 'named',
      name: 'WhatsupDocumentTitle',
      file: pkg.unpkg,
      format: 'iife',
      sourcemap: true,
    },
    watch: {
      include: 'src/**',
    },
  },
  {
    input: './src/index.ts',
    plugins: [
      typescript(),
      babel({
        extensions: ['.ts', '.tsx'],
        include: ['src/**/*'],
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
      commonjs(),
    ],
    output: {
      name: 'WhatsupDocumentTitle',
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  },
  {
    input: './src/index.ts',
    plugins: [
      typescript(),
      babel({
        extensions: ['.ts', '.tsx'],
        include: ['src/**/*'],
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
      commonjs(),
    ],
    output: {
      exports: 'named',
      name: 'WhatsupDocumentTitle',
      file: pkg.main,
      format: 'umd',
      sourcemap: true,
    },
  },
];

const config = watch ? app : [...library, app];

export default config;
