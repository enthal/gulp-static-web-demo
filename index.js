const url = require('url')
const unique = require('uniq')
const app = require('./app')
const thingy = require('./app/thingy')

const data = [1, 2, 2, 3, 4, 5, 5, 5, 6]

console.log(unique(data));
document.body.innerHTML =
  "URL: "+JSON.stringify(url.parse(window.location.href),0,2)
  +"\n\nUnique: "
  +unique(data)
  +"\n\nRequire relative: "+app(123)
  +"\n\nRequire relative more: "+thingy('zap')
