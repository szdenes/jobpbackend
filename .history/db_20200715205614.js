const mongodb = require('mongodb')
const dotenv = require('dotenv')
const app = require('./app')
// const router = require('./router')
dotenv.config()

mongodb.connect(
  process.env.CONNECTIONSTRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    //here, db will return the db collection users

    module.exports = client.db()
    //with a variable in another file, like usersCollection = require('./db') <--we get the database
    console.log('[*] database is running.congrats.')

    const app = require('./app') //when we connect to a session out database
    app.listen(process.env.PORT)
  }
)

mongodb.get('/',)

