const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const tokenBlacklistModel = require("../models/blacklist.model")

/**
 * @name registerUserController
 * @description register a new user, expects username, email and password in the request body
 * @access Public
 */

async function registerUserController(req, res) {
    try {
        let { username, email, password } = req.body

        // 🔹 Basic validation
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Please provide username, email and password"
            })
        }

        // 🔹 Normalize input
        email = email.toLowerCase().trim()
        username = username.trim()

        const isUserAlreadyExists = await userModel.findOne({
            $or: [{ username }, { email }]
        })

        if (isUserAlreadyExists) {
            if (isUserAlreadyExists.username === username) {
                return res.status(400).json({
                    message: "Account already exists with this username"
                })
            } else {
                return res.status(400).json({
                    message: "Account already exists with this email address"
                })
            }
        }

        // 🔹 Hash password 
        const hash = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            username, 
            email,
            password: hash
        })

        // 🔹 JWT Secret safety
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET not defined")
        }

        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        // 🔹 Secure cookie
        res.cookie("token", token)

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })

    } catch (error) {
        console.error("Register Error:", error)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


/**
 * @name loginUserController
 * @description login a user, expects email and password in the request body
 * @access Public
 */

async function loginUserController(req, res) {
    try {
        let { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                message: "Please provide email and password"
            })
        }

        email = email.toLowerCase().trim()

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid email or password"
            })
        }

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET not defined")
        }

        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        // 🔹 Simple cookie 
        res.cookie("token", token)

        return res.status(200).json({
            message: "User loggedIn successfully.",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })

    } catch (error) {
        console.error("Login Error:", error)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


/**
 * @name logoutUserController
 * @description clear token from user cookie and add the token in blacklist
 * @access public
 */

async function logoutUserController(req, res) {
    try {
        const token = req.cookies.token

        if (token) {
            await tokenBlacklistModel.create({ token })
        }

        // 🔹 Simple cookie clear (same style)
        res.clearCookie("token")

        return res.status(200).json({
            message: "User logged out successfully"
        })

    } catch (error) {
        console.error("Logout Error:", error)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

/**
 * @name getMeController
 * @description get the current logged in user details.
 * @access private
 */

async function getMeController(req, res) {
    try {
        const user = await userModel.findById(req.user.id)

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        return res.status(200).json({
            message: "User details fetched successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })

    } catch (error) {
        console.error("GetMe Error:", error)
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}



module.exports = {
    registerUserController,
    loginUserController,
    logoutUserController,
    getMeController
}