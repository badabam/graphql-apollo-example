const mongoose = require('mongoose')

module.exports = mongoose.model('Book', {
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: 'Author',
  },
})
