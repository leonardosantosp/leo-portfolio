import { fastify, FastifyReply, FastifyRequest } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { connectDb } from './config/connect'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import {
  validatorCompiler,
  serializerCompiler,
  jsonSchemaTransform
} from 'fastify-type-provider-zod'
import { skillRoutes } from './routes/skill.routes'
import { technologyRoutes } from './routes/technology.routes'
import { projectRoutes } from './routes/project.routes'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import dotenv from 'dotenv'
import { autenticateRoutes } from './routes/autenticate.routes'

dotenv.config()

const app = fastify()
app.withTypeProvider<ZodTypeProvider>()

const jwt_secret = process.env.JWT_SECRET!

app.register(jwt, {
  secret: jwt_secret
})

app.decorate(
  'authenticate',
  async function (request: FastifyRequest, reply: FastifyReply) {
    try {
      await request.jwtVerify()
    } catch (err) {
      return reply.status(401).send({
        message: 'Você Precisar estar autenticado para fazer essas operações'
      })
    }
  }
)

connectDb()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(cors, {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
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
app.register(autenticateRoutes)

app.listen({ port: 3333 }, (err, address) => {
  console.log(`app listening at ${address}`)
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
