const jwt = require('jsonwebtoken')
const { SECRET } = require('./config')

const signJwt = (object,) => {
    return jwt.sign(object, SECRET)
}

const verifyJwt = (token) => {
    try {


        const decoded = jwt.verify(token, SECRET)

        return {
            valid: true,
            expired: false,
            decoded,
        }
    } catch (error) {
        return {
            valid: false,
            expired: error.message = 'jwt expired',
            decoded: null
        }
    }
}

module.exports = {
    signJwt, verifyJwt
}