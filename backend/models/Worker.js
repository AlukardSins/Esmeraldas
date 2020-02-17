const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Worker = new Schema({
  fullName: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String
  },
  emeraldsMined: {
    type: [
      String
    ]
  }
})

module.exports = mongoose.model('Worker', Worker)
