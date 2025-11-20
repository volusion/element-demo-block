import path from 'path';

const __dirname = import.meta.dirname;

export default {
    cliOptions: {
        config: path.join(__dirname, './eslint.config.js'),
        fix: true
    }
};
