const cloneArray = require('./cloneArray')

test('properly clones array', () => {
  const array = ["a", 2, "c"]
  expect(cloneArray(array)).toEqual(array)
})
