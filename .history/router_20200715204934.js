const app = require('./app')

const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')

router.get((req,res) => {
  res.send('hi')
  console.log('')
})

// router.use('/', userController.home)

module.exports = router
