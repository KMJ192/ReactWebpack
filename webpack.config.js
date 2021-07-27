const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const prod = process.env.NODE_ENV === 'production';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true,
    publicPath: '/',
  },
  mode: prod ? 'production' : 'development',
  devtool: prod ? 'hidden-source-map' : 'eval',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/i,
        rules: [
          {
            loader: MiniCssExtractPlugin.loader 
          },
          {
            loader: 'css-loader',
            options:{
                modules: true
            }
          }
        ]
      }
    ],
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, '/dist'),
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack',
      template: './public/index.html',
      filename: 'index.html',
      minify:{
        removeComments: true,
        useShortDoctype: true
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[contenthash].css'
    }),
    new CssMinimizerWebpackPlugin()
  ],
  optimization: {
    runtimeChunk:{
      name: 'runtime'
    },
    splitChunks: {
      cacheGroups:{
          commons:{
            test: /[\\/]node_modules[\\/]/,
            name: 'venders',
            chunks: 'all'
          }
      }
    },    
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin()
    ]
  }
};