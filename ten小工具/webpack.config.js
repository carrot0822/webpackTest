const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
var ProgressBarPlugin = require('progress-bar-webpack-plugin'); // 打包进度插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩js
var vue_loader_plugin = require('vue-loader/lib/plugin');// 配合vue加载器的辅助插件
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin"); // 计算打包耗时
const smp = new SpeedMeasurePlugin();
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = smp.wrap({
  mode: 'production', // 打包环境的配置 production
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      { 
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader"
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [ // 注意loader的顺序以及写法，否则会报错！！！！！
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        use: [{
          // https://www.webpackjs.com/loaders/url-loader/
          // url-loader包含file-loader ---一般只需要下载 url-loader 但是这个项目不下载file-loader配置时候会报错
          loader: 'url-loader',
          options: {
            limit: 999,
            mimetype: 'image/png',
            // fallback: 'responsive-loader' // 未知错误所以需要注释(待解决ING)
          }
        }]
      },
    ]
  },
  plugins: [
    new UglifyJsPlugin(), // 配置看的我一辆蒙蔽，好奇的请你自己去试下
    new HtmlWebpackPlugin({
      title: `${Math.random()}___Zero`,
      filename: 'index.html',
	  template:"index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
    }),
    new ProgressBarPlugin(),
    new vue_loader_plugin(), //使用引入的插件
	new BundleAnalyzerPlugin({
    analyzerMode: 'server',
    analyzerHost: '127.0.0.1',
    analyzerPort: 8888,
    reportFilename: 'report.html',
    defaultSizes: 'parsed',
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info'
  })
  ]
})

// smp.wrap({
//   plugins: [
//   ]
// })
module.exports = config;