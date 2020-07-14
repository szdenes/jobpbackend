const mongodb = require('mongodb')
const dotenv = require('dotenv')

dotenv.config()
mongodb.connect(
  process.env.CONNECTIONSTRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    module.exports = client
    const app = require('./app')
    console.log('[*] congrats, mongodb connected.')
    app.listen(process.env.PORT)
  }
)
