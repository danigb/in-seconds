var grammar = require('./parser/grammar')
var nearley = require('nearley')

module.exports = function (value) {
  var p = new nearley.Parser(grammar.ParserRules, grammar.ParserStart)
  var result = p.feed(value).results
  if (result && result.length === 1) return result[0]
  console.log(result)
}
