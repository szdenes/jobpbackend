const app = require("./app");

const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')
router.get('/',respont)

let respond = (req, res) => {
    res.render('home')
}

module.exports = router