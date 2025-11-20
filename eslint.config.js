import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
    {
        ignores: [
            '**/node_modules/',
            '**/dist/',
            '**/local/',
            '**/__snapshots__/'
        ]
    },
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
                ...globals.browser,
                ...globals.node,
                ...globals.es2015,
                ...globals.jest
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
            semi: 'error',
            'prefer-const': 'error',
            'react/no-unused-prop-types': 'off',
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
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
