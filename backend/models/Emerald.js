const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Emerald = new Schema({
  description: {
    type: String
  },
  purity: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  minedBy: {
    type: String,
    required: true
  },
  minedOn: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('Emerald', Emerald)
