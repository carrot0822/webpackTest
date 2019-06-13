const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')
const config = {
    entry:'./main.js',
    output:{
        filename:'bundle.js'
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
}
*/
/*
HtmlWebpackPlugin说明
title:用于生成页面的title元素
filename:输出的HTML文件名 可以直接配置带名称？

*/