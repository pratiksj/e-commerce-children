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

module.exports = productRouter