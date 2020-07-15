const app = require('./app')

const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')

app.get('/', (r) => {
  res.send('hi')
})
app.post('/', () => {
  res.send('hi')
})

// router.use('/', userController.home)

module.exports = router
