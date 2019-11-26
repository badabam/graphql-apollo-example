import { gql } from 'apollo-server'
import authorSchema from './authorSchema'
import bookSchema from './bookSchema'

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`
export default [linkSchema, authorSchema, bookSchema]
