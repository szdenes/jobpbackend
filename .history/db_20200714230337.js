const mongodb = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()

mongodb.connect(
  process.env.CONNECTIONSTRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    module.exports = client.db
    console.log('[*] database is running.congrats.')
    let db = mongodb.connection

    //const app = require('./app') //when we connect ot a session out database
    app.listen(process.env.PORT)
  }
)
