import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import getPort from 'get-port';
import replace from 'rollup-plugin-replace';

import baseConfig from './rollup.config';

async function extendConfig(config) {
    const devConfig = {
        plugins: [
            serve({
                open: true,
                contentBase: [`${process.env.INIT_CWD}/local`],
                port: await getPort({
                    // sets the port between 4000-4005 if available
                    // sets the port to a random open port if not
                    port: [4000, 4001, 4002, 4003, 4004, 4005]
                })
            }),
            livereload({
                watch: `${process.env.INIT_CWD}/local`,
                port: await getPort()
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        ]
    };

    config.output.file = config.output.file.replace('dist', 'local');
    config.plugins = [...config.plugins, ...devConfig.plugins];

    return config;
}

export default extendConfig(baseConfig);
