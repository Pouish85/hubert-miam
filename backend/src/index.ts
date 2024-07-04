import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import DataSource from './db';
import RestaurantResolver from "./resolvers/RestaurantResolver";
import CountryResolver from "./resolvers/CountryResolver";

const port = 4000;

async function main() {
    await DataSource.initialize();

    const schema = await buildSchema({
        resolvers: [RestaurantResolver, CountryResolver],
    });

    const server = new ApolloServer({ schema });

    await startStandaloneServer( server, {
        listen: {port},
    }).then(({ url }) => {
    console.log(`Hey! Server is running, GraphQL Playground available at ${url}`);
    })
}

main()
