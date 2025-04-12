import { app } from './app'
import { env } from './env'

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
