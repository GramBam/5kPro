const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const { getEntries, createEntry } = require('../controllers/entryController')

router.route('/').get(protect, getEntries).post(protect, createEntry)

module.exports = router