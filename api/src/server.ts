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
import { technologyRoutes } from './routes/technology.routes.ts'
import { projectRoutes } from './routes/project.routes.ts'
import cors from '@fastify/cors'

const app = fastify()

connectDb()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(cors, {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH']
})

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
app.register(technologyRoutes)
app.register(projectRoutes)

app.listen({ port: 3333 }, (err, address) => {
  console.log(`app listening at ${address}`)
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
