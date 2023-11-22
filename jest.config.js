module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/jest.setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation)',
  ],
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
  collectCoverage: true,
  coverageReporters: ['cobertura', 'lcov', 'html', 'text-summary'],
  testMatch: ['**/*.test.ts?(x)', '**/*.test.js?(x)'],
}
