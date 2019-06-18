const { index } = require('./index');

test('index', () => {
  expect(index(1, 2)).toBe(3);
});

test('another index', () => {
  expect(index(2, 2)).toBe(4);
});
