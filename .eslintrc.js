module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: 'standard-with-typescript',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    rules: {
        '@typescript-eslint/strict-boolean-expressions': 0,
        indent: ['error', 4, { SwitchCase: 1 }],
        '@typescript-eslint/indent': ['error', 4, { SwitchCase: 1 }],
        '@typescript-eslint/no-useless-constructor': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        'array-callback-return': 0,
        'eol-last': ['error', 'always'],
        '@typescript-eslint/no-misused-promises': 0,
        '@typescript-eslint/no-confusing-void-expression': 0
    }
}
