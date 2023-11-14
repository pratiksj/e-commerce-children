const productRouter = require('express').Router()
const cloudinary = require('cloudinary').v2
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



productRouter.get('/', async (req, res) => {

})

productRouter.post('/', async (req, res) => {
    const file = req.files

})

module.exports = productRouter