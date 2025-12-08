import replace from '@rollup/plugin-replace';

import baseConfig from './rollup.config.js';

async function extendConfig(config) {
    const prodConfig = {
        plugins: [
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
                preventAssignment: true
            })
        ]
    };

    config.plugins = [...config.plugins, ...prodConfig.plugins];

    return config;
}

export default extendConfig(baseConfig);
