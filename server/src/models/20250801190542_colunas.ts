import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("colunas", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table
      .integer("table_id")
      .notNullable()
      .references("id")
      .inTable("tabelas")
      .onDelete("CASCADE");
    table.integer("position").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("colunas");
}
