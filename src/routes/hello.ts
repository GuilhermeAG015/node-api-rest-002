import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import crypto from 'node:crypto'

export async function helloRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const tansaction = await knex('transactions')
      .insert({
        id: crypto.randomUUID(),
        title: 'Transação de teste',
        amount: 1000,
      })
      .returning('*')

    return tansaction
  })
}
