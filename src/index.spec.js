const { index } = require('./index');

test('index', () => {
  expect(index(1, 2)).toBe(3);
});

test('another index', () => {
  expect(index(2, 2)).toBe(4);
});

test('another index 2', () => {
  expect(index(2, 3)).toBe(5);
});

test('another index 3', () => {
  expect(index(2, 3)).toBe(5);
});
