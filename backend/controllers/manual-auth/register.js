const bcrypt = require('bcryptjs')
const registerRouter = require('express').Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


registerRouter.get('/hellow', (req, res) => {
    res.send('<h1>Hellow World</h1>')
})

registerRouter.get('/', async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: `Internal sever Error` })
    }
})


registerRouter.post('/', async (req, res) => {
    const { username, name, password, email, address, contact } = req.body
    try {
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)
        const newUser = await prisma.user.create({
            data: {
                username,
                name,
                password: passwordHash,
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

registerRouter.delete('/:id', async (req, res) => {
    const userId = parseInt(req.params.id)
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        await prisma.user.delete({
            where: {
                id: userId
            }
        })
        res.json({ message: 'User deleted successfully' })

    } catch (error) {
        console.log(error)
    }
})

module.exports = registerRouter