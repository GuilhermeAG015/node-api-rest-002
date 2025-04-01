import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hello-v2', async () => {
  const tansactions = await knex('transactions')
    .where('amount', 1000)
    .select('*')

  return tansactions
})

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

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.info('HTTP Server Running!')
  })
