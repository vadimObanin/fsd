import type { StorybookConfig } from '@storybook/react-webpack5';
import {buildCssLoader} from "../build/loaders/buildCssLoader";

const config: StorybookConfig = {
  "stories": [
    "../../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-webpack5"
};
export default config;