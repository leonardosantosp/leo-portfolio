import dotenv from 'dotenv'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export function autenticateRoutes(app: FastifyInstance) {
  dotenv.config()

  interface LoginBody {
    user: string
    password: string
  }

  app.post(
    '/login',
    async (req: FastifyRequest<{ Body: LoginBody }>, reply: FastifyReply) => {
      const { user, password } = req.body

      const isPasswordCorrect = password === process.env.ADMIN_PASSWORD
      const isUserCorrect = user === process.env.ADMIN_USER

      if (!isPasswordCorrect || !isUserCorrect) {
        return reply
          .status(401)
          .send({ message: 'Usuário ou Senha incorretos' })
      }
      const token = app.jwt.sign(
        { user: user, password: password },
        { expiresIn: '1h' }
      )
      return reply.send({ token })
    }
  )
}
