//constants
const express = require('express')
const app = express()
const mongodb = require('mongodb')

//leverages
app.use(express)
console.log('congrats, server is running.')
app.use(mongodb)
console.log('congrats.mongodb is used.')

//connect to mongodb 

app.listen(3000)
