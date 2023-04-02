const express = require('express')

const app = express()

// test endpoint that CREATES A NEW USER
// => user can create a POST request with a USERNAME + PASSWORD
// => stores that data into the DB
app.get('/test', (req, res) => {
  res.send("blaaaaa")
})

module.exports = app
