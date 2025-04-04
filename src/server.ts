import fastify from 'fastify'
import { env } from './env'
import { helloRoutes } from './routes/hello'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

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
