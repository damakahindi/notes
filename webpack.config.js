const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
    ],
  },
  node: {
    fs: 'empty',
  },
  devServer: {
    contentBase: './dist',
    publicPath: '/',
    port: 3000,
    hot: true,
    stats: 'minimal',
    historyApiFallback: true,

    proxy: {
      '/api/**': {
        target: 'https://api.twitter.com/1.1/', // put twitter url here
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api/': '' },
      },
    } },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    HtmlWebpackPluginConfig,
    new Dotenv(),
  ],
};
