const sum = require('./sum')

// 1. Write down description of a successful test => will be logged to console
// test('properly adds two numbers')

// 2. Call the function you will use to test it

// a) how you would write it with normal JavaScript:
// test('properly adds two numbers', () => {
//   if (sum(1, 2) === 3) {  // success condition
//     xxxxxx
//   } else {
//     throw Error
//   }
// })

// b) use built-in EXPECT() test functions
test('properly adds two numbers', () => {
  expect(sum(1, 2)).toBe(3)
})
