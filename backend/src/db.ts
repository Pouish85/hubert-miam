import { DataSource } from "typeorm";

export default new DataSource({
    type: "sqlite",
    "database": "./db.sqlite3",
    "entities": ["./src/entities/*.ts"],
    "synchronize": true,
    "logging": true
});
