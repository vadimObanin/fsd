/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: Config = {
  globals: {
    '__IS_DEV__': true,
  },
  clearMocks: true,
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleFileExtensions: [
    "js", "mjs", "cjs", "jsx", "ts", "mts", "cts", "tsx", "json", "node"
  ],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': resolve(__dirname, 'jestEmptyComponent.tsx'),
  },
  modulePaths: ['<rootDir>src'],
  rootDir: '../../',
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.ts"],
  testMatch: ["<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)"],
};

export default config;