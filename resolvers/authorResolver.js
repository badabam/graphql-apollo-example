import Author from '../models/Author'
import Book from '../models/Book'
export default {
  Query: {
    authors: () => Author.find(),
    author: (_, { id }) => Author.findById(id),
  },

  Mutation: {
    createAuthor: (_, { name }) => Author.create({ name }),
  },

  Author: {
    books: ({ id }) => Book.find({ author: id }),
  },
}
