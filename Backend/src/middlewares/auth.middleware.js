const jwt = require("jsonwebtoken")
const tokenBlacklistModel = require("../models/blacklist.model")

async function authUser(req, res, next) {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(401).json({
                message: "Token not provided."
            })
        }

        const isTokenBlacklisted = await tokenBlacklistModel.findOne({ token })

        if (isTokenBlacklisted) {
            return res.status(401).json({
                message: "Token is invalid"
            })
        }

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET not defined")
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded

        next()

    } catch (err) {
        console.error("Auth Error:", err)

        return res.status(401).json({
            message: "Invalid token."
        })
    }
}

module.exports = { authUser }