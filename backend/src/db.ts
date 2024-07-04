import { DataSource } from "typeorm";
import { Country } from "./entities/Country";
import { Restaurant } from "./entities/Restaurant";
import 'dotenv/config';

export default new DataSource({
    type: "postgres",
    password: process.env.DB_PASS,
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432", 10),
    entities: [Country, Restaurant],
    synchronize: true,
});
