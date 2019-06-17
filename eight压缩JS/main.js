import './assset/demo.less'
require('./assset/demo2.css')
var url = require('./assset/1.gif')
document.write('123456')

var img = document.createElement('img')
img.setAttribute('src',url)
document.body.appendChild(img)
let es = function(){
	console.log(111)
}
setTimeout(()=>{
	document
	console.log('我觉得肯定成功了')
},2000)
