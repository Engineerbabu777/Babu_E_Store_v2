const app = require('./app')
const connectDatabase = require('./db/Database')
const cloudinary = require('cloudinary')

// Handling uncaught Exception
process.on('uncaughtException', err => {
  console.log(`Error: ${err.message}`)
  console.log(`shutting down the server for handling uncaught exception`)
})

// config
require('dotenv').config()

// connect db
connectDatabase()

// CLOUD_NARY CONFIGURATION!
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})

// create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

// unhandled promise rejection
process.on('unhandledRejection', err => {
  console.log(`Shutting down the server for ${err.message}`)
  console.log(`shutting down the server for unhandle promise rejection`)

  server.close(() => {
    process.exit(1)
  })
})
