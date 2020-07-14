const mongodb = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()

mongodb.connect(
  process.env.CONNECTIONSTRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    module.exports = client.db() //here, db will return the db collection users 
    //with a variable in another file, like usersCollection = require('./db') <--
    console.log('[*] database is running.congrats.')

    const app = require('./app') //when we connect ot a session out database
    app.listen(process.env.PORT)
  }
)
