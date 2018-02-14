const html2pug = require('html2pug')
 
const html = '<header><h1 class="title">Hello World!</h1></header>'
const pug = html2pug(html, { tabs: true })

console.log(pug)