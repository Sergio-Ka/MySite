'use strict';

const webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
    index: './source/pages/main.js',
    about: './source/pages/about.js',
    categories: './source/pages/categories.js',
    contacts: './source/pages/contacts.js'
    },

    output: {
        path: __dirname + '/public',
        filename: '[name].js'
    },

    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({template: 'source/pages/main.pug', filename: '../index.html', chunks: ['index']}),
        new HtmlWebpackPlugin({template: 'source/pages/about.pug', filename: '../about.html', chunks: ['about']}),
        new HtmlWebpackPlugin({template: 'source/pages/categories.pug', filename: '../categories.html', chunks: ['categories']}),
        new HtmlWebpackPlugin({template: 'source/pages/contacts.pug', filename: '../contacts.html', chunks: ['contacts']})
    ],

    module: {

        loaders: 
        [
        {
            test: /\.pug$/,
            loader: 'pug-loader'
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
            test: /\.png$/,
            loader: 'file-loader?name=images/[name].[ext]'
        }
        ]

    }
};