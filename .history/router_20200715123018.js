const app = require("./app");

const express = require('express')
const router = express.Router()
app.get('/', () => {
    return 'hello'
})