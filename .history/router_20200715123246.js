const app = require("./app");

const express = require('express')
const router = express.Router()

app.get('/', () => {
    let hello='hello'
    return 'hello'
})