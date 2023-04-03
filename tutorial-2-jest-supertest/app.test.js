const request = require('supertest');
const app = require('./app')

// * TDD
// * => MAKE UNIT TESTS AS EASY AS POSSIBLE TO PASS
// * => WRITE MANY TESTS
// * (instead of one big test that covers everything)

describe("POST /users", () => {

  describe("given a username and password", () => {
    // 1) should save the username and password to the DB // * ignore for now
    // 2) should respond with a json object containing the user id (of the user we just created) // * ignore for now

    // * Just test the stuff that has to do with the HTTP INTERFACE:

    // 3) should respond with a 200 status code
    test("should respond with a 200 status code", async () => {
      const response = await request(app) // * 'request' = supertest function => "imagine this request was made to the server" ; pass in the HTTP server object = in this case 'app' from express
                              .post('/users') // we want to make a POST request to the /users endpoint...
                              .send({ username: "username", password: "password" }) // ...sending this data
      expect(response.statusCode).toBe(200)
    })

    // 4) should specify json in the content type header that is returned from the server (can be important e.g. when you use high-level library like Axios to convert json into js object)
    test("should specify json in the content type header", async () => {
      // this part same as above
      const response = await request(app)
                              .post('/users')
                              .send({ username: "username", password: "password" })
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json")) // 'expect.stringContaining' = jest function
    })

    // 5) server should send back a json object with a user id (ignore the value of the id key for now)
    test("response has userId", async () => {
      const response = await request(app)
                              .post('/users')
                              .send({ username: "username", password: "password" })
      expect(response.body.userId).toBeDefined() // not test the value, just make sure userId does come back
    })
  })


  // * CHECKING FOR USERNAME & PASSWORD => THE REQUEST IS WHAT THE USER SENDS US!!!
  // * WE ONLY WRITE THE CODE FOR WHAT THE SERVER SENDS BACK = THE RESPONSE
  // * ==> All we can do is CHECK whether the request contains username & password
  // * ... and send back 400 BAD REQUEST if it doesn't!

  // 6) when things go wrong: user doesn't send username or password to the server
  describe("when the username and password is missing", () => {
    test("should respond with a status code of 400", async () => {
      // just test for missing password:
      // const response = await request(app)
      //                         .post('/users')
      //                         .send({ username: "username" })
      // expect(response.statusCode).toBe(400) // ! 400 => bad request :)

      // making an array of 3 options for what the body contains
      const bodyData = [
        { username: "username" }, // only username, but not password
        { password: "password" }, // only password, but not username
        {} // no password or username
      ]
      // iterate over the 3 options
      for (const body of bodyData) {
        const response = await request(app).post('/users').send(body)
        expect(response.statusCode).toBe(400)
      }


    })
  })
  // => actual code needs to check if a password was passed to this endpoint (respond with 400 if not)

})


// * 1) + 2) => REALISTIC IMPLEMENTATION:
// - hash the password before it gets to the DB
// - send the user id back to the client not as plain text, but store it in a session / encrypted cookie / json web token / ...
// - handle when the DB fails: 500 status if no connection to DB
