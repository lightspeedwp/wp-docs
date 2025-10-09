module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  collectCoverageFrom: [
    'scripts/**/*.js',
    '\!**/node_modules/**',
  ],
  coverageDirectory: 'coverage',
  verbose: true,
};