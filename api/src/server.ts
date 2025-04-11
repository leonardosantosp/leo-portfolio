import { fastify } from 'fastify'
import { connectDb } from './config/connect'

const app = fastify()

connectDb()

app.listen({ port: 3000 }, (err, address) => {
  console.log(`app listening at ${address}`)
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
