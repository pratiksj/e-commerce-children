const { PrismaClient } = require('@prisma/client')
const { get } = require('lodash')
const { verifyJwt } = require('../utils/jwt.utils')
const prisma = new PrismaClient()


const findUser = async (userId) => {



    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })

    return user


}

module.exports = { findUser }