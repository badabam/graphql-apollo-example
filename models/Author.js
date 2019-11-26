const mongoose = require('mongoose')

module.exports = mongoose.model('Author', {
  name: {
    type: String,
    required: true,
  },
  books: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Book',
    },
  ],
})
