const categoryRouter = require('express').Router()

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

categoryRouter.get('/', async (req, res) => {
    try {
        const variation = await prisma.category.findMany()
        res.json(variation)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: `Internal sever Error` })
    }
})

categoryRouter.post('/', async (req, res) => {
    const { category_name } = req.body
    try {
        const newPost = await prisma.category.create({
            data: {
                category_name
            }
        })
        res.json(newPost)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' })
    }

})

module.exports = categoryRouter