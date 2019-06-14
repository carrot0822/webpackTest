const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
const config = {
	// mode:'production' //打包环境的配置 在package.json里设置打包模式 这样就可以把开发环境和打包环境分开了
    entry:'./main.js',
    output:{
        filename:'bundle.js'
    },
	module:{
		rules:[
			{test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"},
			{
				test:/\.less$/,
				exclude:/node_modules/,
				use:[ //注意顺序不能乱
					{
						loader:'style-loader'
					},
					{
						loader:'css-loader'
					},
					{
						loader:'less-loader'
					}
				]
				
			},
			{
				test:/\.css$/,
				exclude:/node_modules/,
				use:[
					{
						loader:'style-loader'
					},
					{
						loader:'css-loader'
					}
				]
			},
			{
				test:/\.(jpe?g|png|gif|ico)$/,
				use:[{
					loader:'url-loader',
					options:{
						limit:10000,
						mimetype: 'image/png',
					}
				}]
			}
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