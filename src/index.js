var grammar = require('./grammar')
var nearley = require('nearley')
var time = require('./time')

module.exports = function (value, context) {
  time.setContext(context)
  var p = new nearley.Parser(grammar.ParserRules, grammar.ParserStart)
  var result = p.feed(value).results
  if (result && result.length === 1) return result[0]
}
