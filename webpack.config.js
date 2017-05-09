const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: "./src/index.js",
  module: {
      rules: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: [{
                  loader: "babel-loader"
              }]
          }
      ]
  },
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  }
}