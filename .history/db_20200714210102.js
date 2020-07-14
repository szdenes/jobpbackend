const mongodb = require('mongodb')
const dotenv = require('dotenv')

dotenv.config()
mongodb.connect(process.env.CONNECTIONSTRING,{useNewUrlParser})
