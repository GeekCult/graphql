import "reflect-metadata"
import path from "node:path"
import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"
import { AppointmentsResolver } from "./resolvers/appointments_resolver"

async function bootstrap(){

    const schema = await buildSchema({
        validate: { forbidUnknownValues: false },
        resolvers: [
            AppointmentsResolver
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })

    const server = new ApolloServer({
        schema,
    })
    const { url } = await server.listen()

    console.log(`Running - ${url}`)
}

bootstrap()