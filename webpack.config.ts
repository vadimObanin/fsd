import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPats} from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPats = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
  }

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode: mode,
    paths: paths,
    isDev: mode === 'development',
    port: PORT,
  })

  return config;
};