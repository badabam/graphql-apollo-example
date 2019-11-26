import Book from '../models/Book'
import Author from '../models/Author'
export default {
  Query: {
    books: async () => Book.find(),
    book: (_, { id }) => Book.findById(id),
  },

  Mutation: {
    createBook: async (_, { title, author: authorName }) => {
      let author = await Author.find({ name: authorName })
      console.log('author', author)
      if (!author) {
        author = await Author.create({ name: authorName })
      }
      const book = await Book.create({ title, author: author.id })
      author.books = [...author.books, book]
      return book
    },
  },
  Book: {
    author: ({ author }) => Author.findById(author),
  },
}
