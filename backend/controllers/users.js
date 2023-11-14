const userRouter = require('express').Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


userRouter.get('/hellow', (req, res) => {
    res.send('<h1>Hellow World</h1>')
})

userRouter.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: `Internal sever Error` })
    }
})


userRouter.post('/', async (req, res) => {
    const { username, name, password, email, address, contact } = req.body
    try {
        const newUser = await prisma.user.create({
            data: {
                username,
                name,
                password,
                email,
                address,
                contact

            }
        })
        res.json(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: `Internal server Error` })
    }
})

module.exports = userRouter