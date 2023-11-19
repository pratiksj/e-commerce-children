const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



const createSession = async (userId) => {
    const session = await prisma.session.create({
        data: {
            user_id: userId
        }
    })

    return session
}

const findSession = async (query) => {
    const { userId, valid } = query
    console.log(userId, 'userid')

    const user = await prisma.session.findMany({
        where: {
            user_id: userId
        }
    })

    return user
}

module.exports = { createSession, findSession }
