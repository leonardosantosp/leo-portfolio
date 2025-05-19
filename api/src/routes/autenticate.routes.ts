import dotenv from 'dotenv'

export function autenticateRoutes(app) {
  dotenv.config()

  app.post('/login', async (req, reply) => {
    const { user, password } = req.body

    const isPasswordCorrect = password === process.env.ADMIN_PASSWORD
    const isUserCorrect = user === process.env.ADMIN_USER

    if (!isPasswordCorrect || !isUserCorrect) {
      return reply.status(401).send({ message: 'Usuário ou Senha incorretos' })
    }
    const token = app.jwt.sign(
      { user: user, password: password },
      { expiresIn: '1h' }
    )
    return reply.send({ token })
  })
}
