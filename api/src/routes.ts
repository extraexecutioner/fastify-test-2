import { type FastifyInstance } from "fastify"

import { getTestsSchema } from './shcemas'

export default class Route {
    #app!: FastifyInstance 
    #map: Map

    #getRoutes() {
        const getRouter = (instance: FastifyInstance) => {
            instance
                .get<{ Params: { id: number } }>("/tests/:id", { schema: getTestsSchema }, (request, reply) => {
                    const id = request.params.id

                    instance.log.info(`Got request from id: ${id}`)
                    return reply.status(204).send()
                }
            )
        }

        this.#app.register(getRouter, { prefix: "/gets" })
    }

    public init(app: FastifyInstance) {
        this.#app = app
        this.#getRoutes()
    }
}