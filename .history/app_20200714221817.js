//constants
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session) //referencing the express session package
const app = express()

let sessionOptions = session({
  secret: 'setting up db',
  store: new MongoStore({ client: require('./db') }),
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true },
})
//leverages
app.use(sessionOptions)

app.use(express)
console.log('[*] congrats, server is running.')

//has to be checked these ones
app.use(sessionOptions)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())



//connect to mongodb in db.js -- we define the Port there
