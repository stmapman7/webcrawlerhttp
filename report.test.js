const { sortPages } = require("./report.js");
const { test, expect } = require("@jest/globals");

test("sortPages 2 pages", () => {
  const input = {
    'https://mattknits.com/path': 1,
    'https://mattknits.com': 3
  }
  const actual = sortPages(input)
  const expected = [
    ["https://mattknits.com", 3],
    ["https://mattknits.com/path", 1],
  ];
  expect(actual).toEqual(expected)
})

test("sortPages 5 pages", () => {
  const input = {
    "https://mattknits.com/path": 1,
    "https://mattknits.com": 3,
    "https://mattknits.com/path2": 5,
    "https://mattknits.com/path3": 2,
    "https://mattknits.com/path4": 9
  };
  const actual = sortPages(input);
  const expected = [
    ["https://mattknits.com/path4", 9],
    ["https://mattknits.com/path2", 5],
    ["https://mattknits.com", 3],
    ["https://mattknits.com/path3", 2],
    ["https://mattknits.com/path", 1],
  ];
  expect(actual).toEqual(expected);
});
