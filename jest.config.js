/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testTimeout: 30000,
    coveragePathIgnorePatterns: [
        'node_modules',
        'test/utils'
    ],
    globals: {
        'ts-jest': {
            useESM: true
        },
    },
};
