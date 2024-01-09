const express = require('express')
const ErrorHandler = require('./middleware/error')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(
  cors({
    origin: ['https://eshop-tutorial-pyri.vercel.app'],
    credentials: true
  })
)

app.use(express.json())
app.use(cookieParser())


app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))

// config
require('dotenv').config()

// import routes
// const user = require('./controller/user')

// app.use('/api/v2/user', user)

// it's for ErrorHandling
app.use(ErrorHandler)

module.exports = app
