## Back

- Preparar o container do postgres
- Desenvolver back
  - Migrar as tabelas
    - Tabelas
      - id: number
      - name: string, único
      - backgroundImage: string
      - url: string
    - Colunas
      - id: number
      - table_id: number (referência à tabela)
      - position: number
    - Cards
      - id: number
      - column_id: number (referência à coluna)
      - backgroundImg: string
      - content: string
  - CRUD básico
    - Portas
    - Controllers
    - Services
  - Testes

## Front