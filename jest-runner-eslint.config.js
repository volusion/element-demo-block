const path = require('path');

module.exports = {
    cliOptions: {
        config: path.join(__dirname, './eslint.config.js'),
        fix: true
    }
};
