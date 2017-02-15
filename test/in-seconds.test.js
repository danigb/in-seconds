/* global describe test expect */
var inSeconds = require('..')

describe('inSeconds', () => {
  test('durations', () => {
    expect(inSeconds('4n', { bpm: 120 })).toBe(0.5)
    expect(inSeconds('4n', { bpm: 60 })).toBe(1)
    expect(inSeconds('4n')).toBe(0.5)
    expect(inSeconds('4d', { bpm: 120 })).toBe(0.75)
    expect(inSeconds('4t', { bpm: 120 })).toBe(1 / 3)
    expect(inSeconds('4n + 8n')).toBe(inSeconds('4d'))
    expect(inSeconds('16n+16n')).toBe(inSeconds('8n'))
    expect(inSeconds('4t+4t+4t')).toBe(inSeconds('2n'))
  })

  test('inSeconds numbers', () => {
    expect(inSeconds('3')).toBe(3)
    expect(inSeconds('6.5')).toBe(6.5)
  })

  test('arithmetic', () => {
    expect(inSeconds('3+2')).toBe(5)
    expect(inSeconds('2-3')).toBe(-1)
    expect(inSeconds('3*2')).toBe(6)
    expect(inSeconds('3/2')).toBe(1.5)
  })

  test('parenthesis', () => {
    expect(inSeconds('3*2+2')).toBe(8)
    expect(inSeconds('2+2*3')).toBe(8)
    expect(inSeconds('(2+2)*3')).toBe(12)
    expect(inSeconds('(2+2)*(2+2)')).toBe(16)
    expect(inSeconds('(2)')).toBe(2)
  })

  test('hertzs', () => {
    expect(inSeconds('1Hz')).toBe(1)
    expect(inSeconds('10Hz')).toBe(0.1)
    expect(inSeconds('100Hz')).toBe(0.01)
    expect(inSeconds('10Hz+10Hz')).toBe(0.2)
    expect(inSeconds('(10+10)Hz')).toBe(0.05)
  })

  test('beats per minute', () => {
    expect(inSeconds('120bpm')).toBe(0.5)
    expect(inSeconds('60bpm')).toBe(1)
    expect(inSeconds('60bpm + 60bpm')).toBe(2)
    expect(inSeconds('(60 + 60)bpm')).toBe(0.5)
  })

  test('midi', () => {
    expect(inSeconds('69midi')).toBe(inSeconds('440Hz'))
    expect(inSeconds('69midi', { tuning: 440 })).toBe(0.0022727272727272726)
    expect(inSeconds('69midi', { tuning: 10 })).toBe(0.1)
    expect(inSeconds('60midi')).toBe(0.00382225643297143)
    expect(inSeconds('(60 / 2)midi')).toBe(inSeconds('30midi'))
  })
})
