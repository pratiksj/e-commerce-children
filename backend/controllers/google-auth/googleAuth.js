const sessionRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const qs = require('qs')
const { SECRET } = require('../../utils/config')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const axios = require('axios')
const { googleClient_id, googleClient_secret, googleOuthRedirectUrl } = require('../../utils/config')
const createSession = require('../../services/session')
// const { createSession } = require('../../services/session')

console.log("secret: ", SECRET)
const accessTokenCookieOptions = {
    maxAge: 900000, // 15 mins
    httpOnly: true,
    domain: "localhost",
    path: "/",
    sameSite: "lax",
    secure: false,
};

const refreshTokenCookieOptions = {
    ...accessTokenCookieOptions,
    maxAge: 3.154e10, // 1 year
};

const getGoogleOAuthTokens = async ({ code }) => {
    //define baseUrl 
    const url = 'https://oauth2.googleapis.com/token'
    const values = {
        code,
        client_id: googleClient_id,
        client_secret: googleClient_secret,
        redirect_uri: googleOuthRedirectUrl,
        grant_type: "authorization_code"
    }
    try {
        const res = await axios.post(url, qs.stringify(values), {
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded',
            }
        })
        return res.data

    } catch (error) {
        console.log(error.response.data.error)
        res.send(error.message)
    }
}

const getGoogleUser = async ({ id_token, access_token }) => {
    try {
        const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`, {
            headers: {
                Authorization: `Bearer ${id_token}`
            }
        })

        return res.data
    } catch (error) {
        log.error(error, 'Error fetching Google user')
        throw new Error(error.message)
    }
}

const findCreateAndUpdateUser = async (userObj) => {

    const userExist = await prisma.user.findUnique({
        where: {
            username: userObj.name
        }
    })
    if (!userExist) {
        const newUser = await prisma.user.create({
            data: {
                name: userObj.name,
                email: userObj.email,
                username: userObj.name
            }
        })
        return newUser
    } else {
        return userExist

    }
}








sessionRouter.get('/oauth/google', async (req, res) => {
    try {
        const code = req.query.code
        //get the id and access token with the code
        const { id_token, access_token } = await getGoogleOAuthTokens({ code })
        console.log({ id_token, access_token })
        //get user with tokens
        const googleUser = await getGoogleUser({ id_token, access_token })
        //jwt.decode(id_token)
        console.log({ googleUser })
        if (!googleUser.verified_email) {
            return res.status(403).send('Google account is not verified')
        }
        //upsert the user

        const user = await findCreateAndUpdateUser(googleUser)
        console.log("user: ", user)

        // if (user.newUser) {


        //     //return res.status(201).json({ msg: "user created", data: user.newUser })
        // } else if (user.updateUser) {
        //     return res.status(400).json({ msg: "user updated successfully", data: user.updateUser })
        // }
        //create sessionsS
        const session = await createSession(user.id)
        console.log("sess: ", session)

        // create an access token

        const accessToken = jwt.sign(
            { ...user, session: session.id }, SECRET,
            { expiresIn: '15m' } // 15 minutes
        );

        // create a refresh token
        const refreshToken = jwt.sign(
            { ...user, session: session.id }, SECRET,
            { expiresIn: '1y' } // 1 year
        );

        // set cookies
        res.cookie("accessToken", accessToken, accessTokenCookieOptions);

        res.cookie("refreshToken", refreshToken, refreshTokenCookieOptions);
        res.redirect('http://localhost:5173/');


    } catch (error) {
        console.log(error, 'error')
        return res.redirect(`http://localhost:5173/oauth/error`)
    }
})

module.exports = sessionRouter


