# GrimmDev-Client-Relations-back-end-lgrimm6

### Instalação

Para Iniciar este projeto, é necessário instalar as dependências com o gerenciador de pacotes YARN, siga os comandos abaixo:

    yarn install

### Postgresql

crie um banco de dados postgresql para prosseguir

### Variaveis de ambiente

configure um arquivo .env baseaso nas variaveis disponiveis no .env.example

### Migrações

para dar início às migrations do projeto precisamos usar a CLI do typeorm seguindo os comandos abaixo:

    yarn typeorm migration:create src/migrations/initialMigration

    yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts

    yarn typeorm migration:run -d src/data-source.ts

### Execução

Após ter concluido todos os passos anteriores execute o servidor com o seguinte comando:

    yarn dev
