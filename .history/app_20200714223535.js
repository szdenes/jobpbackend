//constants
const express = require('express')
const app = express()

//leverages

app.use(express)
console.log('[*] congrats, server is running.')

//has to be checked these ones
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//connect to mongodb in db.js -- we define the Port there

let dbconnection = require('./db')

dbc
