module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        'no-use-before-define': 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'react/display-name': 'off',
        'space-before-function-paren': 'off',
        'no-unused-vars': 'off',
        'no-multiple-empty-lines': 'off',
        'no-async-promise-executor': 'off',
        'no-useless-constructor': 'off',
        'import/no-anonymous-default-export': 'off'
    }
}
