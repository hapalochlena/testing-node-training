// Why this extra server file? => Jest/Supertest binds the routes to "whatever port it wants"
// => We put our app.listen(3000) that we would use for manual testing / to actually spin up our server in here, so it doesn't get in the way

const app = require('./app.js')

app.listen(3000, () => console.log("listening on 3000 "));
