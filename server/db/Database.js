const mongoose = require('mongoose')

const connectDatabase = () => {
  if (mongoose.connection.readyState === 1) {
    mongoose.connect(process.env.MONGO_URI)
  } else {
    return mongoose.connection.asPromise()
  }
}

module.exports = connectDatabase
