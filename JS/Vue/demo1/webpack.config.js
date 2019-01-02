const path = require('path');
//自动生成html
//自动追加[name].bundle.js
const HtmlPlugin = require("html-webpack-plugin")
// webpack.config.js
/**
 * Vue Loader 的配置和其它的 loader 不太一样。除了通过一条规则将 vue-loader 应用到所有扩展名为 .vue 的文件上之外，
 * 请确保在你的 webpack 配置中添加 Vue Loader 的插件
 */
const VueLoaderPlugin = require('vue-loader/lib/plugin')
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
    }), //html内存插件

    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'vue-style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.less$/,
      use: [
        //less 规则
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    },
    {
      test: /\.scss$/,
      use: [
        //less 规则
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.(png|svg|jpg|jpeg|webp|gif)$/,
      use: [
        //less 规则
        {
          loader: 'file-loader',
          options: {
            name: '[hash:8]-[name].[ext]'
          }
        }
      ],

    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime'],

        }
      }

    },
    {
      test: /\.vue$/,
      use: 'vue-loader'
    }
    ]
  },
  resolve: {
    alias: {
      //vue 设置导入的路径
      // "vue$" : "vue/dist/vue.js"
    }
  }
};