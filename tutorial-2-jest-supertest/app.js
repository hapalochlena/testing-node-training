const express = require('express')
const app = express()

app.use(express.json())

// endpoint that CREATES A NEW USER
// => user can create a POST request with a USERNAME + PASSWORD
// => stores that data into the DB
app.post('/users', (req, res) => {
  // res.sendStatus(200) // test 3) passes; second test fails, because default content-header = text/plain
  // res.send({}) // both tests 3)+4) now pass // ! obviously, app still very incomplete => NOT ENOUGH TESTS YET
  // res.send({userId: 0}) // pass test 5)

  // test 6):
  const { password } = req.body // const password = req.body.password
  if (!password) {
    res.sendStatus(400)
    return
  }
  res.send({userId: 0})
})



module.exports = app
