const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Entry = require('../models/entryModel')

const getEntries = asyncHandler(async (req, res) => {
  // Get user using the ID and JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    // Unauthorized
    res.status(401)
    throw new Error('User not found')
  }

  const entries = await Entry.find({ user: req.user.id })
  res.status(200).json(entries)
})


const getEntry = asyncHandler(async (req, res) => {
  // Get user using the ID and JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    // Unauthorized
    res.status(401)
    throw new Error('User not found')
  }

  const entry = await Entry.findById(req.params.id)

  if (!entry) {
    res.status(404)
    throw new Error('Entry not found')
  }

  if (entry.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  res.status(200).json(entry)
})


const createEntry = asyncHandler(async (req, res) => {
  const { date, speed } = req.body

  if (!date || !speed) {
    // Bad Request
    res.status(400)
    throw new Error('Please add date and speed')
  }

  const user = await User.findById(req.user.id)

  if (!user) {
    // Unauthorized
    res.status(401)
    throw new Error('User not found')
  }

  const entry = await Entry.create({ date, speed, user: req.user.id })

  // Created
  res.status(201).json(entry)
})


const deleteEntry = asyncHandler(async (req, res) => {
  // Get user using the ID and JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    // Unauthorized
    res.status(401)
    throw new Error('User not found')
  }

  const entry = await Entry.findById(req.params.id)

  if (!entry) {
    res.status(404)
    throw new Error('Entry not found')
  }

  if (entry.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  await entry.remove()

  res.status(200).json({ success: true })
})

const updateEntry = asyncHandler(async (req, res) => {
  // Get user using the ID and JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    // Unauthorized
    res.status(401)
    throw new Error('User not found')
  }

  const entry = await Entry.findById(req.params.id)

  if (!entry) {
    res.status(404)
    throw new Error('Entry not found')
  }

  if (entry.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  const updatedEntry = await Entry.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updatedEntry)
})

module.exports = { getEntries, getEntry, createEntry, deleteEntry, updateEntry }