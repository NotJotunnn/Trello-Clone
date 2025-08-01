import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tabelas", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable().unique();
    table.string("backgroundImage");
    table.string("url").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("tabelas");
}
