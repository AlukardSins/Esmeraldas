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
      Schema.Types.ObjectId
    ]
  }
})

module.exports = mongoose.model('Worker', Worker)
