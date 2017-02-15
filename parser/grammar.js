// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }

  var time = require('./time')
var grammar = {
    ParserRules: [
    {"name": "main", "symbols": ["_", "AS", "_"], "postprocess": function(d) {return d[1]; }},
    {"name": "AS", "symbols": ["AS", "_", {"literal":"+"}, "_", "MD"], "postprocess": function(d) {return d[0]+d[4]; }},
    {"name": "AS", "symbols": ["AS", "_", {"literal":"-"}, "_", "MD"], "postprocess": function(d) {return d[0]-d[4]; }},
    {"name": "AS", "symbols": ["MD"], "postprocess": id},
    {"name": "MD", "symbols": ["MD", "_", {"literal":"*"}, "_", "P"], "postprocess": function(d) {return d[0]*d[4]; }},
    {"name": "MD", "symbols": ["MD", "_", {"literal":"/"}, "_", "P"], "postprocess": function(d) {return d[0]/d[4]; }},
    {"name": "MD", "symbols": ["P"], "postprocess": id},
    {"name": "P", "symbols": [{"literal":"("}, "_", "AS", "_", {"literal":")"}], "postprocess": function(d) {return d[2]; }},
    {"name": "P", "symbols": ["T"], "postprocess": id},
    {"name": "T$string$1", "symbols": [{"literal":"H"}, {"literal":"z"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "T", "symbols": ["P", "T$string$1"], "postprocess": function(d) { return time.fromHz(d[0]); }},
    {"name": "T$string$2", "symbols": [{"literal":"b"}, {"literal":"p"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "T", "symbols": ["P", "T$string$2"], "postprocess": function(d) { return time.fromBpm(d[0]); }},
    {"name": "T$string$3", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"d"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "T", "symbols": ["P", "T$string$3"], "postprocess": function(d) { return time.fromMidi(d[0]); }},
    {"name": "T", "symbols": ["N"], "postprocess": id},
    {"name": "N", "symbols": ["float"], "postprocess": id},
    {"name": "float", "symbols": ["int", {"literal":"."}, "int"], "postprocess": function(d) {return parseFloat(d[0] + d[1] + d[2])}},
    {"name": "float", "symbols": ["int"], "postprocess": function(d) {return parseInt(d[0])}},
    {"name": "int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$1", "symbols": [/[0-9]/, "int$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "int", "symbols": ["int$ebnf$1"], "postprocess": function(d) {return d[0].join(""); }},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": [/[\s]/, "_$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null; }}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
