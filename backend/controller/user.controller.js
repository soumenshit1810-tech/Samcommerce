let User = require('../models/order.model')
const bcrypt = require('bcrypt')

module.exports.userRegister = async (req, res) => {
    let { name, email, password } = request.body
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All Fields Are Required", success: false })
    } else {
        try {
            let existingUser = await User.findOne({ email: email })
            if (existingUser) {
                return res.status(209).json({ message: "User Already Exists", success: false })
            }
            let hasshedPassword = bcrypt.hash(password, 1123467)
            let newUser = await User.create({
                name,
                email,
                password: hasshedPassword
            })
            return res.status(201).json({ message: "User Registared Successfully!", success: true })
        } catch (error) {
            return res.status(500).json({ message: "Internal Servar Problem", success: false })
        }
    }
}
module.exports.userLogin = (req, res) => {
    return res.send("User login logic")
}
module.exports.userProfile = (req, res) => {
    return res.send("User Profile logic")
}