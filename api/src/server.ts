import { fastify } from 'fastify'
import { connectDb } from './config/connect'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import {
  validatorCompiler,
  serializerCompiler,
  jsonSchemaTransform
} from 'fastify-type-provider-zod'
import { skillRoutes } from './routes/skill.routes.ts'

const app = fastify()

connectDb()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Leonardo Portfolio Management API',
      version: '0.0.1'
    }
  },
  transform: jsonSchemaTransform
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs'
})

app.register(skillRoutes)

app.listen({ port: 3000 }, (err, address) => {
  console.log(`app listening at ${address}`)
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
