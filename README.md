# in-seconds

> time calculator for music applications

[![Build Status](https://travis-ci.org/danigb/in-seconds.svg?branch=master)](https://travis-ci.org/danigb/in-seconds) [![Coverage](https://codecov.io/github/danigb/in-seconds/coverage.svg)](https://codecov.io/gh/danigb/in-seconds)

__Work in progress__. It uses the awesome [nearley](https://github.com/Hardmath123/nearley) to parse the strings:

```js
var inSeconds = require('in-seconds')
inSeconds('100Hz') // => 0.01
inSeconds('120bpm') // => 0.5

// if Hz can be expressed in seconds, notes too
inSeconds('C4') // => 0.00382225643297143
inSeconds('60midi') // => 0.00382225643297143

// note durations
inSeconds('8n', { bpm: 120 }) // => 0.25 (a quarter note at 120bpm )
inSeconds('4t', { bpm: 100 }) // a quarter triplet note at 100bpm

// offsets
inSeconds('+8n', { bpm: 120, now: 1.21 }) // => 1.46 (an eight note after now)

// quantization
inSeconds('@8n' { bpm: 120, now: 1.21 }) // => the next quarter note after 1.21 (at 120 bpm)

// arithmetic fun!
inSeconds('4n + 8n', { bpm: 120 }) // => 0.75 (a quarter note + a eight not at 120 bpm)
inSeconds('100Hz + 1') // => 1.01
inSeconds('2 * C3') // => 0.00382225643297143 (same as C4)
```

See [tests](https://github.com/danigb/in-seconds/blob/master/test/in-seconds.test.js) for more.

## Install

No release yet.

## Develop

Clone this repo, install dependencies with npm: `npm install` and then run the tests: `npm test`


## License

MIT
