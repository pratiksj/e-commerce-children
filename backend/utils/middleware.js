const { verify } = require('jsonwebtoken')
const logger = require('./logger')
const { verifyJwt } = require('./jwt.utils')
const { get } = require('lodash')

const requestLogger = (request, response, next) => {
    logger.info('Method:', request.method)
    logger.info('Path:  ', request.path)
    logger.info('Body:  ', request.body)
    logger.info('---')
    next()
}


const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
    logger.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}

const deserializeUser = (req, res, next) => {

    //get from the lodash is used for safely accessing nested object without throwin error
    const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "")

    const { decoded, expired } = verifyJwt(accessToken)

    if (!decoded) {

        return res.status(401).json({ error: 'token invalid' })
    }
    res.locals.user = decoded
    next()
}


module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler,
    deserializeUser
}
