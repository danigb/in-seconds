# in-seconds

> time calculation for music applications

[![Build Status](https://travis-ci.org/danigb/in-seconds.svg?branch=master)](https://travis-ci.org/danigb/in-seconds) [![Coverage](https://codecov.io/github/danigb/in-seconds/coverage.svg)](https://codecov.io/gh/danigb/in-seconds)

__Work in progress__

```js
var inSeconds = require('in-seconds')
inSeconds('100Hz') // => 0.01
inSeconds('120bpm') // => 0.5

// yes, if Hz can be expressed in seconds, notes too
inSeconds('C4') // => 0.00382225643297143
inSeconds('60midi') // => 0.00382225643297143

// note durations
inSeconds('8n', { bpm: 120 }) // => 0.25 (a 120bpm quarter note)
inSeconds('4n + 8n', { bpm: 120 }) // => a quarter note + a eight not at 120 bpm
inSeconds('100Hz + 1') // => 1.01
inSeconds('2 * C3') // => 0.00382225643297143 (same as C4)
inSeconds('+8n', { bpm: 120, now: 1.21 }) // => 1.46 (an eight note after now)
inSeconds('@8n' { bpm: 120, now: 1.21 }) // => the next quarter note after 1.21 (at 120 bpm)
```

See tests for more.
