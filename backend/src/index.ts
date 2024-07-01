import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import db from "./db";
import RestaurantResolver from "./resolvers/RestaurantResolver";
import CountryResolver from "./resolvers/CountryResolver";

const port = 4001;

buildSchema({
    resolvers: [RestaurantResolver, CountryResolver],
}).then(async (schema) => {
    await db.initialize();
    const server = new ApolloServer({ schema });
    const { url } = await startStandaloneServer(server, { listen: { port } });
    console.log(`graphql server listening on ${url}`);
});
