const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const outputDir = 'dist';

const config = {
  devServer: {
    open: true,
    historyApiFallback: true,
    port: 3000,
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, outputDir),
  },
  mode: 'development',
  devtool: 'eval',
};

module.exports = merge(common, config);
