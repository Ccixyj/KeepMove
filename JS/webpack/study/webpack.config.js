const path = require('path');
//自动生成html
//自动追加[name].bundle.js
const HtmlPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // devtool: 'inline-source-map',
  devServer: {
    // contentBase: "./dist"  
    contentBase: "./",
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, "./src/index.html"),
      filename: "index.html"
    }) //html内存插件
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  }
};