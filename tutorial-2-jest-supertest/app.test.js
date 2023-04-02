const supertest = require('supertest')
const app = require('./app')

describe("POST /users", () => {

  describe("given a username and password", () => {
    // should save the username and password to the DB
    // should respond with a json object containing the user id (of the user we just created)
    // should respond with a 200 status code
    // should specify json in the content type header (can be important e.g. when you use high-level library like Axios to convert json into js object)
  })

  describe("when the username and password is missing", () => {
    // should respond with a status code of 400
  })

})


// REALISTIC IMPLEMENTATION:
// - hash the password before it gets to the DB
// - send the user id back to the client not as plain text, but store it in a session / encrypted cookie / json web token / ...
// - handle when the DB fails: 500 status if no connection to DB
