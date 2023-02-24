module.exports = {
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.test.json',
        },
    },
    setupFilesAfterEnv: ['jest-extended'],
    roots: ['<rootDir>/test/unit'],
    testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    maxWorkers: 3,
    resetMocks: true,
    restoreMocks: true,
};
