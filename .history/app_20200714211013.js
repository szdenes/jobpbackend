//constants
const express = require('express')
const app = express()

//leverages
app.use(express)
console.log('[*] congrats, server is running.')

//connect to mongodb and
app.use(db)

// app.listen(3000)
