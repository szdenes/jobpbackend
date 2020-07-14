//constants
const express = require('express')
const app = express()
const mongodb = require('mongodb')

//leverages
app.use(express)
console.log('congrats, server is running.')

app.listen(3000)
