const { normalizeURL } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('normalizeURL strip protocol', () => {
    const input = 'https://mattknits.blogspot.com/path'
    const actual = normalizeURL(input)
    const expected = 'mattknits.blogspot.com/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip trailing slash', () => {
    const input = 'https://mattknits.blogspot.com/path/'
    const actual = normalizeURL(input)
    const expected = 'mattknits.blogspot.com/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL capitals', () => {
    const input = 'https://mattknits.BLOGSPOT.com/path'
    const actual = normalizeURL(input)
    const expected = 'mattknits.blogspot.com/path'
    expect(actual).toEqual(expected)
})

test('normalizeURL strip http', () => {
    const input = 'http://mattknits.BLOGSPOT.com/path'
    const actual = normalizeURL(input)
    const expected = 'mattknits.blogspot.com/path'
    expect(actual).toEqual(expected)
})