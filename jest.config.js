module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testRegex: '.*\\.test\\.(ts|tsx|js)$',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  "setupTestFrameworkScriptFile": "<rootDir>/src/setupTests.ts"
}
