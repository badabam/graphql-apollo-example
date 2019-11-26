import { gql } from 'apollo-server'

export default gql`
  type Book {
    title: String
    author: Author
    id: ID
  }

  extend type Query {
    books: [Book]
    book(id: ID): Book
  }

  extend type Mutation {
    createBook(title: String!, author: String!): Book!
  }
`
