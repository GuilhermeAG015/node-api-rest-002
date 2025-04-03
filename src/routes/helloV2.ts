import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function helloV2Routes(app: FastifyInstance) {
  app.get('/hello-v2', async () => {
    const tansactions = await knex('transactions')
      .where('amount', 1000)
      .select('*')

    return tansactions
  })
}
