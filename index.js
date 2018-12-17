const url = require('url')
const unique = require('uniq')
const data = [1, 2, 2, 3, 4, 5, 5, 5, 6]

console.log(unique(data));
document.body.innerHTML =
  "URL: "+JSON.stringify(url.parse(window.location.href),0,2)
  +"\n\nUnique: "
  +unique(data);
