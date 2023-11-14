const express = require('express')
const app = express()
const userRouter = require('./controllers/users')
const middleware = require('./utils/middleware')

app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)


app.use('/api/users', userRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app