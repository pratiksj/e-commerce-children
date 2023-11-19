const userSessionRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { PrismaClient } = require('@prisma/client')
const { createSession, findSession } = require('../services/session')
const { signJwt } = require('../utils/jwt.utils')
const { deserializeUser } = require('../utils/middleware')

const prisma = new PrismaClient()


const validatePassword = async ({
    email,
    password,
}) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (!user) {
        return false;
    }
    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(password, user.password)

    //const isValid = await user.comparePassword(password);

    if (!passwordCorrect) return false;

    return user;
}




userSessionRouter.get('/', deserializeUser, async (req, res) => {
    const userId = res.locals.user.id


    const sessions = await findSession({ userId, valid: true })

    return res.send(sessions)

})

userSessionRouter.post('/', async (req, res) => {
    //validate the user password
    const user = await validatePassword(req.body)
    if (!user) {
        return res.status(401).send('Invalid email or password')
    }
    //create a session
    const session = await createSession(user.id)

    //create an access token
    const accessToken = signJwt({ ...user, session: session.id }, { expiresIn: '5m' })
    //create an refresh token
    const refreshToken = signJwt({ ...user, session: session.id }, { expiresIn: '5m' })
    return res.send({ accessToken, refreshToken })

})


userSessionRouter.delete('/:id', async (req, res) => {
    const categoryId = parseInt(req.params.id)
    try {
        const variation = await prisma.session.findUnique({
            where: {
                id: categoryId
            }
        })


        if (!variation) {
            return res.status(404).json({ error: 'User not found' })
        }

        await prisma.session.delete({
            where: {
                id: categoryId
            }
        })
        res.json({ message: 'User deleted successfully' })

    } catch (error) {
        console.log(error)
    }
})

module.exports = userSessionRouter