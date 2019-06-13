const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
const config = {
    entry:'./main.js',
    output:{
        filename:'bundle.js'
    },
	module:{
		rules:[
			{test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"}
		]
	},
    plugins:[
        new HtmlWebpackPlugin({
            title:`${Math.random()}__Zero`,
            filename:'index.html'
        }),
		new ProgressBarPlugin()
    ]
}

module.exports = config
/*
config说明
entry：js文件入口
output：{
    filename： 输出文件的名字
},
module:模块处理
*/
/*
HtmlWebpackPlugin说明
title:用于生成页面的title元素
filename:输出的HTML文件名 可以直接配置带名称？

*/

/*
安装依赖说明 babel的使用依赖
"babel-core": "^6.26.3",
"babel-loader": "^7.1.5",
 "babel-preset-env": "^1.7.0"
*/