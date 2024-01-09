const mongoose = require('mongoose')

const connectDatabase = () => {
  return mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Database Connected!')
  })
}

module.exports = connectDatabase
