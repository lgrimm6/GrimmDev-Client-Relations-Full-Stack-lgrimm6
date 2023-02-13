import { DataSource } from "typeorm";
import "dotenv/config";

import { Client } from "./entities/client.entity";
import { Contact } from "./entities/contact.entity";
import { initialMigration1676252484833 } from "./migrations/1676252484833-initialMigration";
import { createTables1676252489796 } from "./migrations/1676252489796-createTables";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: [Client, Contact],
  migrations: [initialMigration1676252484833, createTables1676252489796],
});

export default AppDataSource;
