var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: { path: path.join(__dirname,'./build'), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
      }
    ]
  },
   plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};
