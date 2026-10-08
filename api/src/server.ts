import fastify, { type FastifyInstance } from 'fastify'
import fastifyCors from '@fastify/cors'

import Route from './routes'
import corsConfiguration from './cors'

export default class Server {
    #app: FastifyInstance = fastify({ logger: true })

    async #registerPlugins() {
        await this.#app.register(fastifyCors, corsConfiguration)
    }

    #routesSetup() {
        const route = new Route()
        route.init(this.#app)
    }

    public async init() {
        this.#routesSetup()
        await this.#registerPlugins()

        await this.#app.listen({ port: Number(process.env.SERVER_PORT), host: "localhost" })
        this.#app.log.info("Server is running successfully!")
    }
}