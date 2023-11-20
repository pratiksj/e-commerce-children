const express = require('express')
const app = express()
const registerRouter = require('./controllers/manual-auth/register')
const productRouter = require('./controllers/product')
const categoryRouter = require('./controllers/category')
const middleware = require('./utils/middleware')
const fileUpload = require('express-fileupload')
//const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')

//const { keys } = require('./utils/config')
//const passport = require('passport')
const loginRouter = require('./controllers/manual-auth/login')
const sessionRouter = require('./controllers/google-auth/googleAuth')
const userSessionRouter = require('./controllers/session')
const userRouter = require('./controllers/user')


// app.use(cookieSession(
//     {
//         name: 'session',
//         keys: [keys],
//         maxAge: 24 * 60 * 60 * 100,
//     }
// ))

// app.use(passport.initialize())
// app.use(passport.session())
app.use(cookieParser())

app.use(fileUpload({
    useTempFiles: true
}))

app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)


app.use('/api/manual-register', registerRouter)
app.use('/api/manual-login', loginRouter)
app.use('/api/products', productRouter)
app.use('/api/category', categoryRouter)
app.use('/api/sessions', sessionRouter)
app.use('/api/session', userSessionRouter)
app.use('/api/login-user', userRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app