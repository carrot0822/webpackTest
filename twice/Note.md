常规打包
package.json:
"webpack": "node_modules/.bin/webpack --mode development" 非全局安装下 这样才能正常启动webpack打包

webpack.config.js
entry:文件入口
output:文件输出口
Node命令
__dirname:返回当前文件夹的绝对路径
