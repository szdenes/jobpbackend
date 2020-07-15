//constants
const express = require('express')
const app = express()
const router = require('./router')

//leverages

app.use(express)
console.log('[*] congrats, server is running.')

//has to be checked these ones
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', router)

app.set('views','views') //telling where is the html
app.set('view engnine','ejs')

//connect to mongodb in db.js
//we define the Port there
//we set in nodemon out main js file to db.js
//we export the app as a module.export
//we import in the mongodb.connect the "app" export's return

module.exports = app
