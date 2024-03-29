const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const outputDir = 'build';

const config = {
  devtool: 'hidden-source-map',
  mode: 'production',
  plugins: [new CssMinimizerWebpackPlugin()],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, outputDir),
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
  },
};

module.exports = merge(common, config);
