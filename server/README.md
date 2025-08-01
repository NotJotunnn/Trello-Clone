# Server side

README do lado do server!

As portas para se acessar os dados não estão prontas por enquanto!

## Como rodar?

1. cd server/
2. npm i
3. alterar o nome example.env para .env
4. npm run db:up
5. npm run db:seed

### E como acessar os dados por enquanto?

Logo, caso queira acessar os dados para verificar se os dados funcionaram, terá que acessar seu docker!

1. docker exec -it TrelloClone psql -U myuser -d myuser
2. envie \dt para saber quais tabelas estão disponíveis (evite qualquer uma com prefixo knex_)
3. Rode seus códigos SQL normalmente!

p.s.: Caso fique preso em qualquer etapa, tente uma das opções à seguir:
1. Exit
2. \q