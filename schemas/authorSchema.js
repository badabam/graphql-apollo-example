import { gql } from 'apollo-server'

export default gql`
  type Author {
    name: String
    books: [Book]
    id: ID
  }

  extend type Query {
    authors: [Author]
    author(id: ID): Author
  }

  extend type Mutation {
    createAuthor(name: String!, books: [ID]): Author!
  }
`
