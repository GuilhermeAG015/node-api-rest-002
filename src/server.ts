import fastify from 'fastify'
import { env } from './env'
import { helloRoutes } from './routes/hello'
import { helloV2Routes } from './routes/helloV2'

const app = fastify()

app.register(helloRoutes)
app.register(helloV2Routes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.info('HTTP Server Running!')
  })
