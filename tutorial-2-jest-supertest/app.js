const express = require('express')
const app = express()

// endpoint that CREATES A NEW USER
// => user can create a POST request with a USERNAME + PASSWORD
// => stores that data into the DB
app.post('/users', (req, res) => {
  
})

module.exports = app
