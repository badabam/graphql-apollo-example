import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import resolvers from './resolvers'
import typeDefs from './schemas'

const { MONGO_URL } = process.env

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
