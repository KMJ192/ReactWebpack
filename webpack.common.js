const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'PRODUCTION';

module.exports = {
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
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {}
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
      minify: isProd ? {
        removeComments: true,
        useShortDoctype: true
      } : false
    }),
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[contenthash].css'
    }),
    new webpack.DefinePlugin({
        IS_PRODUCTION: isProd
    })
  ]
};