const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')
const Book = require('./models/Book')
const Author = require('./models/Author')

mongoose.connect('mongodb://localhost:27017/graphql-example', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const typeDefs = gql`
  type Book {
    title: String
    author: Author
    _id: ID
  }

  type Author {
    name: String
    books: [Book]
    _id: ID
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    book(_id: ID): Book
    authors: [Author]
    author(_id: ID): Author
  }
`

const resolvers = {
  Query: {
    books: () => Book.find().populate('author'),
    book: (_, args) => Book.findById(args._id).populate('author'),
    authors: () => Author.find().populate('books'),
    author: (_, args) => Author.findById(args._id).populate('books'),
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port: 4321 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
