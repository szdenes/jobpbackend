const mongodb = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()

mongodb.connect(
  process.env.CONNECTIONSTRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    console.log('[*] database is running.congrats.')
    const app = require('./app')
    console.log('app', app)
    //app.listen(process.env.PORT)
    module.exports = client
  }
)
