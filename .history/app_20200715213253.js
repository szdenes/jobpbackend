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

app.set('views', 'html') //telling where is the html
app.set('view engine', 'ejs')

app.get('/')

app.use('/', router)
//connect to mongodb in db.js
//we define the Port there
//we set in nodemon out main js file to db.js
//we export the app as a module.export
//we import in the mongodb.connect the "app" export's return

app.get('/', (req, res) => {
  res.send('welcome to fckj')
})

module.exports = app
