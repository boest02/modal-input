import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/main.js',
  output: {
    file: 'public/build/bundle.js',
    format: 'esm'
  },
  plugins: [
    svelte(),
    resolve(),
	terser()
  ]
}