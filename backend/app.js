const express = require('express')
const app = express()
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const productRouter = require('./controllers/product')
const categoryRouter = require('./controllers/category')
const middleware = require('./utils/middleware')
const fileUpload = require('express-fileupload')
app.use(fileUpload({
    useTempFiles: true
}))

app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)


app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)
app.use('/api/products', productRouter)
app.use('/api/category', categoryRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app