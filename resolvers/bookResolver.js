import Author from '../models/Author'
import Book from '../models/Book'

export default {
  Query: {
    books: async () => Book.find(),
    book: (_, { id }) => Book.findById(id),
  },

  Mutation: {
    createBook: async (_, { title, author: authorName }) => {
      let author = await Author.findOne({ name: authorName })
      if (!author) {
        author = await Author.create({ name: authorName })
      }
      const book = await Book.create({ title, author })
      return book
    },
  },

  Book: {
    author: ({ author }) => Author.findById(author),
  },
}
