
function fromHz (hz) {
  return 1 / hz
}

function fromMidi (midi, tuning) {
  tuning = tuning || 440
  return fromHz(Math.pow(2, (midi - 69) / 12) * tuning)
}

function fromBpm (bpm) {
  return 60 / bpm
}

module.exports = {
  fromHz, fromBpm, fromMidi
}
