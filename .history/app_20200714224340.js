//constants
const express = require('express')
const app = express()
const mongodb = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()

//leverages

app.use(express)
console.log('[*] congrats, server is running.')

//has to be checked these ones
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//connect to mongodb in db.js -- we define the Port there
mongodb.connect(
    process.env.CONNECTIONSTRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    function (err, client) {
      db = client.db() //this selects our mongodb database
      app.listen(4000)
    }
  )

