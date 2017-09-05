#!/bin/bash

npm install react react-dom -save
npm install webpack babel-loader babel-core babel-preset-es2015 babel-preset-react css-loader style-loader extract-text-webpack-plugin css-loader style-loader --save-dev

#wget webpack.config from github "https://github.com/iankit3/creator/blob/master/webpack.config.js"
wget https://raw.githubusercontent.com/iankit3/creator/master/webpack.config.js
#wget README "https://github.com/iankit3/creator/blob/master/README.md"
wget https://raw.githubusercontent.com/iankit3/creator/master/README.md
wget https://raw.githubusercontent.com/iankit3/creator/master/index.html
