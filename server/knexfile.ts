import "dotenv/config";

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
    extension: "ts",
    loadExtensions: [".ts"], // Explicitly tell Knex to use TS files
  },
  seeds: {
    directory: "./src/db/seeds",
    extension: "ts",
    loadExtensions: [".ts"], // Explicitly tell Knex to use TS files
  },
};

export default Knexfile;
