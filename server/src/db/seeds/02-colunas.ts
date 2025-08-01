import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("colunas").del();

  // Inserts seed entries
  await knex("colunas").insert([
    {
      id: 0,
      name: "À fazer",
      table_id: 0,
      position: 1,
    },
    {
      id: 1,
      name: "Fazendo",
      table_id: 0,
      position: 2,
    },
    {
      id: 2,
      name: "Feito",
      table_id: 0,
      position: 3,
    },
  ]);
}
