import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js', // 打包入口
  output: [
    {
      file: 'lib/sparrow.js', // node打包
      format: 'cjs',
    },
    {
      file: 'esm/sparrow.js', // 浏览器打包
      format: 'es',
    },
    {
      file: 'dist/sparrow.min.js', // node和浏览器混合包
      format: 'umd',
      name: 'sp',
    },
  ],
  plugins: [
    resolve(),
    babel(),
  ],
};
