import fs from 'fs';
import path from 'path';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from '@rollup/plugin-terser';

function getBlockName() {
    const data = fs.readFileSync(
        path.join(process.env.INIT_CWD, '.element-block')
    );
    const block = JSON.parse(data);
    return 'volBlock' + block.publishedName;
}

function distBuild(options) {
    options = options || {};

    return {
        input: path.join(process.env.INIT_CWD, 'src/index.js'),
        output: {
            file: path.join(process.env.INIT_CWD, `dist/${options.filename}`),
            name: getBlockName(),
            format: options.format,
            sourcemap: options.sourcemap
        },
        external: ['aphrodite'],
        plugins: [
            babel({
                babelrc: false,
                presets: [
                    ['@babel/preset-env', { modules: false }],
                    '@babel/preset-react'
                ],
                babelHelpers: 'bundled',
                exclude: ['node_modules/**']
            }),
            resolve({
                browser: true
            }),
            commonjs(),
            options.minify && terser()
        ]
    };
}

export default distBuild({
    filename: 'component.umd.js',
    format: 'umd',
    sourcemap: true,
    minify: false
});
