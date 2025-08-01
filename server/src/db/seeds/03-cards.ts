import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("cards").del();

  // Inserts seed entries
  await knex("cards").insert([
    {
      id: 0,
      column_id: 0,
      backgroundImg: "",
      content: "Criar o UI",
      position: 1,
    },
    {
      id: 1,
      column_id: 0,
      backgroundImg: "",
      content: "Criar o Back",
      position: 2,
    },
    {
      id: 2,
      column_id: 0,
      backgroundImg: "",
      content: "Fazer todo o resto",
      position: 3,
    },
  ]);
}
