@{%
  var time = require('./time')
%}

main -> _ AS _       {% function(d) {return d[1]; } %}

# Addition and subtraction
AS -> AS _ "+" _ MD {% function(d) {return d[0]+d[4]; } %}
    | AS _ "-" _ MD {% function(d) {return d[0]-d[4]; } %}
    | MD            {% id %}

# Multiplication and division
MD -> MD _ "*" _ P  {% function(d) {return d[0]*d[4]; } %}
    | MD _ "/" _ P  {% function(d) {return d[0]/d[4]; } %}
    | P             {% id %}

# Parentheses
P -> "(" _ AS _ ")" {% function(d) {return d[2]; } %}
    | T             {% id %}

# Time
T -> P "Hz"         {% function(d) { return time.fromHz(d[0]); } %}
    | P "bpm"       {% function(d) { return time.fromBpm(d[0]); } %}
    | P "midi"      {% function(d) { return time.fromMidi(d[0]); } %}
    | DUR           {% id %}
    | N             {% id %}

DUR -> FIG "n"  {% function(d) { return time.fromDuration(d[0], 1) } %}
      | FIG "d"  {% function(d) { return time.fromDuration(d[0], 1.5) } %}
      | FIG "t"  {% function(d) { return time.fromDuration(d[0], 2/3) } %}

FIG -> "1" | "2" | "4" | "8" | "16" | "32" | "64" | "128"

N -> float          {% id %}

float ->
  int "." int       {% function(d) {return parseFloat(d[0] + d[1] + d[2])} %}
	| int             {% function(d) {return parseInt(d[0])} %}

int -> [0-9]:+      {% function(d) {return d[0].join(""); } %}

# Whitespace. The important thing here is that the postprocessor
# is a null-returning function. This is a memory efficiency trick.
_ -> [\s]:*         {% function(d) {return null; } %}
