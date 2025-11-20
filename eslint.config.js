import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
    js.configs.recommended,
    prettierConfig,
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ['@babel/preset-react']
                },
                ecmaFeatures: {
                    jsx: true
                }
            },
            ecmaVersion: 2018,
            sourceType: 'module',
            globals: {
                // Browser globals
                window: 'readonly',
                document: 'readonly',
                navigator: 'readonly',
                console: 'readonly',
                // Node globals
                process: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                module: 'readonly',
                require: 'readonly',
                exports: 'writable',
                global: 'readonly',
                // ES6+ globals
                Promise: 'readonly',
                Set: 'readonly',
                Map: 'readonly',
                Symbol: 'readonly'
            }
        },
        plugins: {
            react,
            prettier
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            'no-const-assign': 'error',
            'no-var': 'error',
            'semi': 'error',
            'prefer-const': 'error',
            'react/no-unused-prop-types': 'off',
            'react/prop-types': 'off',
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4,
                    singleQuote: true,
                    trailingComma: 'none',
                    endOfLine: 'auto'
                }
            ]
        }
    }
];
