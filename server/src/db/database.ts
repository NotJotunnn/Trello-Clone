import Knexfile from "../../knexfile";
import Knex from "knex";

const db = Knex(Knexfile);

module.exports = db;
