const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please include all fields')
  }

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash Password

  const salt = await bcrypt.genSalt()
  const hashedPass = await bcrypt.hash(password, salt)

  const user = await User.create({ name, email, password: hashedPass })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400)
    throw new Error('Invalid User Data')
  }
})

const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route')
})

module.exports = {
  registerUser,
  loginUser
}