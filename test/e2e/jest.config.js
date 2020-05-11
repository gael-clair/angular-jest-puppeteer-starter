/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('../../tsconfig');

module.exports = {
  rootDir: '../..',
  preset: 'jest-puppeteer',
  verbose: true,
  testMatch: ['**/test/e2e/**/*.e2e-spec.ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageDirectory: './coverage/e2e',
  coverageReporters: ['json'],
  setupFilesAfterEnv: ['jest-puppeteer-istanbul/lib/setup'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'End-to-End tests',
        outputDirectory: './reports',
        outputName: 'e2e.xml',
      },
    ],
    'jest-puppeteer-istanbul/lib/reporter',
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),
};
