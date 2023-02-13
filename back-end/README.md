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

\*\*verifque se o AppDataSource está configurado da seguinte forma:

        const AppDataSource = new DataSource({
            entities: ["src/entities/*.ts"],
            migrations: ["src/migrations/*.ts"],
        });

    yarn typeorm migration:create src/migrations/initialMigration

    yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts

    yarn typeorm migration:run -d src/data-source.ts

caso o typeorm não identifique as migrations, você deverar importar manualmente as entidades e as migrations
para o datasource da seguinte forma:

- Dentro do data-source.ts importe as entities e configure o AppDataSource

        import { Client } from "./entities/client.entity";
        import { Contact } from "./entities/contact.entity";

        const AppDataSource = new DataSource({
            entities: [Client, Contact]
        });

- execute os comandos

        yarn typeorm migration:create src/migrations/initialMigration

        yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts

- em seguida importe as migrations e configure o AppDataSource

        import { initialMigration1676252484833 } from "./migrations/1676252484833-initialMigration";
        import { createTables1676252489796 } from "./migrations/1676252489796-createTables";

        const AppDataSource = new DataSource({
            entities: [Client, Contact]
            migrations: [initialMigration1676252484833, createTables1676252489796],
        });

### Execução

Após ter concluido todos os passos anteriores execute o servidor com o seguinte comando:

    yarn dev
