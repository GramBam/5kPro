const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Entry = require('../models/entryModel')

const getEntries = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getEntries' })
})

const createEntry = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'createEntry' })
})

module.exports = { getEntries, createEntry }