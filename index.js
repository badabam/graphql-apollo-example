import { ApolloServer } from 'apollo-server'

import mongoose from 'mongoose'

import typeDefs from './schemas'
import resolvers from './resolvers'

mongoose.connect('mongodb://localhost:27017/graphql-example', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port: 4321 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
