import authorSchema from './authorSchema'
import bookSchema from './bookSchema'
import { gql } from 'apollo-server'

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`
export default [linkSchema, authorSchema, bookSchema]
