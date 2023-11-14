const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { SECRET } = require('../utils/config')
const loginRouter = require('express').Router()
const { PrismaClient, Prisma } = require('@prisma/client')
const prisma = new PrismaClient()


loginRouter.post('/', async (req, res) => {
    const { username, password } = req.body
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })

    const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.password)
    if (!(user && passwordCorrect)) {
        return res.status(401).json({
            error: 'invalid username or password'
        })
    }

    const userForToken = {
        username: user.username,
        id: user.id
    }
    const token = jwt.sign(userForToken, SECRET)
    res.status(200).send({ token, username: user.username, name: user.name })
})

module.exports = loginRouter