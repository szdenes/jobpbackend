const app = require("./app");

const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')

let respond=(req,res) => {
    res.router('alma')
}
 module.exports = router