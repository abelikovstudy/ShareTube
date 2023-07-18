const fastify = require('fastify')({ logger: true })

fastify.route({
  method: 'GET',
  url: '/api/upload',
  schema: {
    // the response needs to be an object with an `hello` property of type 'string'
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  // this function is executed for every request before the handler is executed
  preHandler: async (request, reply) => {
    // E.g. check authentication
  },
  handler: async (request, reply) => {
    return { hello: 'world' }
  }
})



// Run the server!
fastify.listen({ port: 81 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})