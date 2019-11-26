import mongoose, { Schema } from 'mongoose'

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
    required: true,
  },
})
module.exports = mongoose.model('Book', bookSchema)
