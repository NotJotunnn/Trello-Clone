// TODO setup config

import dotenv from "dotenv";

dotenv.config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const Knexfile = {
  client: "pg",
  connection: {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/models",
  },
  seeds: {
    directory: "./src/Knex/seeds",
  },
};

export default Knexfile;
