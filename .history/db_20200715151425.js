const mongodb = require('mongodb')
const dotenv = require('dotenv')
const app = require('./app')
dotenv.config()

mongodb.connect(
  process.env.CONNECTIONSTRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, adatb) => {
    //here, db will return the db collection users

    module.exports = adatb.db()
    //with a variable in another file, like usersCollection = require('./db') <--we get the database
    console.log('[*] database is running.congrats.')

    const app = require('./app') //when we connect to a session out database
    app.listen(process.env.PORT)
    mongodb.use('/',)

  }
  
)

