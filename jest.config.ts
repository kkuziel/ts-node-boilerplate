module.exports = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['jest-extended', './jest.setup.ts'],
    roots: ['<rootDir>/test/unit'],
    testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', '<rootDir>/tsconfig.json'],
    },
    maxWorkers: 3,
    resetMocks: true,
    restoreMocks: true,
};
