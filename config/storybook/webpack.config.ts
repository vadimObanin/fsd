import webpack from "webpack";
import {BuildPaths} from "../build/types/config";
import path from "path";
import { fileURLToPath } from 'url';
import {buildCssLoader} from "../build/loaders/buildCssLoader";

export default ({config}: {config: webpack.Configuration}) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const paths: BuildPaths = {
    src: path.resolve(__dirname, '..', '..', 'src'),
    entry: '',
    html: '',
    output: ''
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules.push(buildCssLoader(true))
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    shared: paths.src + '/shared',
  };
  return config;
}