# music-time

> time units conversion for music applications

__Work in progress__

In it's heart is a library for time conversion:

```js
var seconds = require('in-seconds')
seconds.fromHz(100) // => 0.01
seconds.toBpm(0.5) // => 120

// yes, if Hz can be expressed in seconds, notes can be too
seconds.fromNote('C4') // => 0.00382225643297143
seconds.fromMidi(60) // => 0.00382225643297143

// note durations
seconds.fromDuration('8n', 120)
```

But you can use it in a powerful way:

```js
seconds.calc('100Hz + 1') // => 1.01
seconds.calc('4n + 8n', { bpm: 120 }) // => a quarter note + a eight not at 120 bpm
seconds.calc('2 * C3') // => 0.00382225643297143 (same as C4)
seconds.calc('+8n', { bpm: 120, now: 1.21 }) // => 1.46 (an eight note after now)
seconds.calc('@8n' { bpm: 120, now: 1.21 })
```

If your are looking for a one-line functions:

```js
var fromHz = require('in-seconds/from/hz')
fromHz(100) // => 0.01
var toBpm = require('in-seconds/to/bpm')
toBpm(0.5) // => 120
```
