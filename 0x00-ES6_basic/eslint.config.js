import { defineConfig } from 'eslint-define-config';

export default defineConfig({
    languageOptions: {
        globals: {
            Atomics: 'readonly',
            SharedArrayBuffer: 'readonly',
        },
        parserOptions: {
            ecmaVersion: 2018,
            sourceType: 'module',
        },
    },
    extends: [
        'airbnb-base',
        'plugin:jest/all',
    ],
    plugins: ['jest'],
    rules: {
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
            'error',
            'LabeledStatement',
            'WithStatement',
        ],
        'no-unused-vars': 'error',
    },
    overrides: [
        {
            files: ['*.js'],
            excludedFiles: 'babel.config.js',
        },
    ],
});
