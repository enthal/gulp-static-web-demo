const url = require('url')
document.body.innerHTML = "URL: "+JSON.stringify(url.parse(window.location.href),0,2)
