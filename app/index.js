const el = require('elel');
const uniq = require('uniq')

const data = [1, 2, 2, 3, 4, 5, 5, 5, 6]

module.exports = [
  el('.basis', ["Why, hello there, world."]),
  el('', ["Unique data: " + uniq(data)]),
]
