import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("tabelas").del();

  // Inserts seed entries
  await knex("tabelas").insert([
    {
      id: 0,
      name: "Criando trello",
      backgroundImage: "",
      url: "/criando-trello",
    },
  ]);
}
