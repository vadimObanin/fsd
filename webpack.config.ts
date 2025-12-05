import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPats} from "./config/build/types/config";

const paths: BuildPats = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  output: path.resolve(__dirname, 'dist'),
}

const mode = 'development';

const config: webpack.Configuration = buildWebpackConfig({
  mode: mode,
  paths: paths,
  isDev: mode === 'development',
})

export default config;