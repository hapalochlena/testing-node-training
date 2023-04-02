const subtract = require('./subtract')

test('properly subtracts two numbers', () => {
  expect(subtract(3, 1)).toBe(2)
})
