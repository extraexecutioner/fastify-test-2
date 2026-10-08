import { type FastifySchema } from "fastify"

export const getTestsSchema: FastifySchema = {
    params: {
        type: "object",
        required: ["id"],
        properties: {
            id: { type: "number" }
        },

        maxProperties: 1
    }
}