module.exports = {
    testEnvironment: 'node',
    testMatch: ['<rootDir>/test/e2e/*.spec.ts'],
    testTimeout: 300000,
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', '<rootDir>/tsconfig.json'],
    },
    maxWorkers: 3,
    verbose: true,
};
