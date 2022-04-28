const mongoose = require('mongoose')

const entrySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  date: {
    type: String,
    required: [true, 'Add a date']
  },
  speed: {
    type: Number,
    required: [true, 'Add a speed']
  },
}, { timestamps: true })

module.exports = mongoose.model('Entry', entrySchema)