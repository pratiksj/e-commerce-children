const productRouter = require('express').Router()
const { api_key, api_secret } = require('../utils/config')
const cloudinary = require('cloudinary').v2
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

cloudinary.config({
    cloud_name: 'dcebk8xjd',
    api_key: api_key,
    api_secret: api_secret
});

productRouter.get('/', async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: {
                category: true,
                comments: {
                    select: {
                        comment_text: true
                    }
                }
            }
        })
        res.json(products)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' })
    }

})

productRouter.post('/', async (req, res) => {
    const file = req.files.photo
    const categoryNum = parseInt(req.body.category_id)
    const priceNum = parseInt(req.body.price)



    cloudinary.uploader.upload(file.tempFilePath, async (error, result) => {
        if (error) {
            console.log(error)
            res.status(500).json({ error: 'Error uploading image to Cloudinary' })
        } else {
            try {
                const newProduct = await prisma.product.create({
                    data: {
                        name: req.body.name,
                        description: req.body.description,
                        price: priceNum,
                        category_id: categoryNum,
                        image: result.url
                    }
                })
                res.json(newProduct)

            } catch (error) {
                res.status(500).json({ error: "Error creating product in database" })
            }
        }

    })

})

productRouter.post('/comment', async (req, res) => {

    try {
        const { user_id, product_id, comment_text } = req.body
        const user = await prisma.user.findUnique({
            where: {
                id: user_id
            }
        })
        const product = await prisma.product.findUnique({
            where: {
                product_id: product_id
            }
        })
        if (!user || !product) {
            res.status(404).json({ error: 'User or Product not found' })
        }
        const newComment = await prisma.comment.create({
            data: {
                user_id,
                product_id,
                comment_text
            }
        })
        res.status(201).json(newComment)

    } catch (error) {
        res.status(500).json({ error: "Error in Internal server" })
    }
})

productRouter.post('/cart', async (req, res) => {


})

module.exports = productRouter