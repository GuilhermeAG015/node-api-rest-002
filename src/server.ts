import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { env } from './env'
import { helloRoutes } from './routes/hello'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(cookie)

app.register(helloRoutes)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.info('HTTP Server Running!')
  })
  .catch((e) => {
    console.error('HTTP Server is not running!', e)
  })
