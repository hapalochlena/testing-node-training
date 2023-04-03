const request = require('supertest');
const app = require('./app')

describe("POST /users", () => {

  describe("given a username and password", () => {
    // 1) should save the username and password to the DB // * ignore for now
    // 2) should respond with a json object containing the user id (of the user we just created) // * ignore for now

    // * Just test the stuff that has to do with the HTTP INTERFACE:

    // 3) should respond with a 200 status code
    test("should respond with a 200 status code", async () => {
      const response = await request(app) // 'request' = supertest function; pass in the HTTP server object = in this case 'app' from express
                              .post('/users') // we want to make a POST request to the /users endpoint...
                              .send({ username: "username", password: "password" }) // ...sending this data
      expect(response.statusCode).toBe(200)
    })

    // 4) should specify json in the content type header (can be important e.g. when you use high-level library like Axios to convert json into js object)
  })

  describe("when the username and password is missing", () => {
    // should respond with a status code of 400
  })

})


// * 1) + 2) => REALISTIC IMPLEMENTATION:
// - hash the password before it gets to the DB
// - send the user id back to the client not as plain text, but store it in a session / encrypted cookie / json web token / ...
// - handle when the DB fails: 500 status if no connection to DB
