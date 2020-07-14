//constants
const express = require('express')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')(session) //referencing the express session package
// const app = express()


//leverages
app.use(sessionOptions)

app.use(express)
console.log('[*] congrats, server is running.')

//has to be checked these ones
app.use(sessionOptions)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())



//connect to mongodb in db.js -- we define the Port there
