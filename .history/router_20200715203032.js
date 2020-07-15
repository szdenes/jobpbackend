const app = require("./app");

const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')
//router.get('/', userController.home)

// function respont(res){
// console.log('in da function')
// app.render(`<h1> HELLLOU </h1>`) 
// }
// respont()

router.get('/', function (req, res) {
    res.send('Wiki home page')
    console.log('f')
  })
router.post('/', function (req, res) {
    res.send('Wiki home page');
  })

module.exports = router