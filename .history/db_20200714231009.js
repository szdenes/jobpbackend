const mongodb = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()

mongodb.connect(
  process.env.CONNECTIONSTRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, return) => {
    //here, db will return the db collection users

    module.exports = return.db()
    //with a variable in another file, like usersCollection = require('./db') <--we get the database
    console.log('[*] database is running.congrats.')

    const app = require('./app') //when we connect ot a session out database
    app.listen(process.env.PORT)
  }
)
