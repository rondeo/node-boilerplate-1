const { index } = require('./index');

test('index', () => {
  expect(index(1, 2)).toBe(3);
});
