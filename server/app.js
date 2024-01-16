const express = require('express')
const ErrorHandler = require('./middleware/error')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))

// config
require('dotenv').config()

// import routes
const user = require('./controller/user')
const shop = require('./controller/shop')
const event = require('./controller/event')
const product = require('./controller/product')

app.use('/api/v3/user', user)
app.use('/api/v3/shop', shop)
app.use('/api/v3/event', event)
app.use('/api/v3/product', product)

// it's for ErrorHandling
app.use(ErrorHandler)

module.exports = app
