/* global describe test expect */
var parse = require('../parse')

describe('parse', () => {
  test('parse numbers', () => {
    expect(parse('3')).toBe(3)
    expect(parse('6.5')).toBe(6.5)
  })

  test('arithmetic', () => {
    expect(parse('3+2')).toBe(5)
    expect(parse('2-3')).toBe(-1)
    expect(parse('3*2')).toBe(6)
    expect(parse('3/2')).toBe(1.5)
  })

  test('parenthesis', () => {
    expect(parse('3*2+2')).toBe(8)
    expect(parse('2+2*3')).toBe(8)
    expect(parse('(2+2)*3')).toBe(12)
    expect(parse('(2+2)*(2+2)')).toBe(16)
    expect(parse('(2)')).toBe(2)
  })

  test('hertzs', () => {
    expect(parse('1Hz')).toBe(1)
    expect(parse('10Hz')).toBe(0.1)
    expect(parse('100Hz')).toBe(0.01)
    expect(parse('10Hz+10Hz')).toBe(0.2)
    expect(parse('(10+10)Hz')).toBe(0.05)
  })

  test('beats per minute', () => {
    expect(parse('120bpm')).toBe(0.5)
    expect(parse('60bpm')).toBe(1)
    expect(parse('60bpm + 60bpm')).toBe(2)
    expect(parse('(60 + 60)bpm')).toBe(0.5)
  })

  test('midi', () => {
    expect(parse('69midi')).toBe(parse('440Hz'))
    expect(parse('60midi')).toBe(0.00382225643297143)
  })
})
