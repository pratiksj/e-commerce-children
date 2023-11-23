const { requireUser, deserializeUser } = require('../utils/middleware')


const userRouter = require('express').Router()


userRouter.get('/', deserializeUser, requireUser, async (req, res) => {
    console.log(res, 'from the current user route')
    const loggedInUser = res.locals.user

    return res.send(loggedInUser)

})

module.exports = userRouter