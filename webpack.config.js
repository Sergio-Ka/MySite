'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  entry: {
    index: './source/pages/main/main.js',
    about: './source/pages/about/about.js',
    portfolio: './source/pages/portfolio/portfolio.js',
    contacts: './source/pages/contacts/contacts.js'
  },

  output: {
    path: __dirname + '/public',
    filename: './js/[name].js'
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({ template: 'source/pages/main/main.pug', filename: '../public/index.html', chunks: ['index'] }),
    new HtmlWebpackPlugin({ template: 'source/pages/about/about.pug', filename: '../public/about.html', chunks: ['about'] }),
    new HtmlWebpackPlugin({ template: 'source/pages/portfolio/portfolio.pug', filename: '../public/portfolio.html', chunks: ['portfolio'] }),
    new HtmlWebpackPlugin({ template: 'source/pages/contacts/contacts.pug', filename: '../public/contacts.html', chunks: ['contacts'] }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    }),
  ],

  module: {

    loaders:
      [
        {
          test: /\.pug$/,
          loader: 'pug-loader'
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('css-loader')
        },
        {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract('css-loader!stylus-loader')
        },
        {
          test: /\.(svg|ttf|otf|eot|woff)$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
        },
        {
          test: /\.(png|ico|jpg)$/,
          loader: 'file-loader?name=images/[name].[ext]'
        }
      ]

  },

  devServer: {
    host: "localhost",
    port: "8080",
    contentBase: __dirname + '/public'
  }
};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(new MinifyPlugin(/*minifyOpts, pluginOpts*/));
};