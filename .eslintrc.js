module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
        createDefaultProgram: true,
    },
    plugins: [
        '@typescript-eslint/eslint-plugin',
        'import',
        'jest',
    ],
    extends: [
        'airbnb-typescript/base',
    ],
    rules: {
        'arrow-parens': 0,
        'no-await-in-loop': 0,
        'object-curly-newline': 0,
        'no-continue': 0,
        '@typescript-eslint/unbound-method': 0,
        '@typescript-eslint/no-use-before-define': 0,
        'max-classes-per-file': ['error', 2],
        '@typescript-eslint/indent': ['error', 4],
        'class-methods-use-this': 0,
        'no-restricted-syntax': 0,
        'max-len': [2, 130],
        'import/no-cycle': 0,
    },
    ignorePatterns: ['dist/**', 'node_modules/**'],
    overrides: [
        {
            files: ['*.ts', '*.spec.ts', '*.tsx'],
        },
    ],
};
