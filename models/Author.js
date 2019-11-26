import mongoose, { Schema } from 'mongoose'

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Author', authorSchema)
