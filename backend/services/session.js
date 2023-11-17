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

module.exports = createSession
