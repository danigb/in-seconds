
var ctx = {}

var time = {
  setContext: (c) => { ctx = c || {}; return ctx },
  fromHz: (hz) => 1 / hz,
  fromBpm: (bpm) => 60 / bpm,
  fromMidi: (midi) => time.fromHz(Math.pow(2, (midi - 69) / 12) * (ctx.tuning || 440)),
  fromDuration: (fig, mod) => mod * (4 / fig) * (60 / (ctx.bpm || 120))
}

module.exports = time
