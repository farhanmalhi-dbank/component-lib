import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node'
  // testTimeout: 10000
  // other Jest options...
};

export default config;
