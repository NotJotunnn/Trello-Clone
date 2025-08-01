import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("cards", (table) => {
    table.increments("id").primary();
    table
      .integer("column_id")
      .notNullable()
      .references("id")
      .inTable("colunas")
      .onDelete("CASCADE");
    table.string("backgroundImg");
    table.string("content");
    table.integer("position").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("cards")
}
