# Boas vindas ao Desafio-Precato-Backend!

# O que é o Desafio-Precato-Backend?

É uma API Rest que realiza a incrição, caso seja válida, armazenando as informações em um banco de dados PostgreSQL e retorna todas as incrições realizadas em um período recebendo uma data inicial e final. Este desafio foi proposto pela empresa [Precato](https://www.linkedin.com/company/precato/).

## Técnologias usadas

Back-end:
> Desenvolvido usando: TypeScript, API Rest, Sequelize, PostgreSQL, Node.Js, Docker

Para executar o projeto corretamente, atente-se a cada passo descrito a seguir.

<details>
  <summary><strong>‼️ Para bem utilizar esse projeto</strong></summary><br />

  1. Clone o repositório
  - Utilize o comando: `git clone git@github.com:JoaopSilvaa/Desafio-Precato-Backend.git`<br />
  2. Acesse a pasta do projeto
  - Acesse a pasta Desafio-Precato-Backend com `cd Desafio-Precato-Backend`;<br />
  3. Crie uma nova branch a partir da main
  - Verifique se você está na branch `main`
    * Exemplo: `git branch`
  - Se não estiver, mude para a branch `main`
    * Exemplo: `git checkout main`
  - Crie a branch
    * Exemplo: `git checkout -b joaozinho-desafio-precato-backend`<br />
  4. Instale as dependências gerais do projeto 
  - npm install <br />
  5. Inicialize o projeto da forma que quiser(via docker ou localmente) e acesse os endpoints disponíveis com um aplicativo como o [Postman](https://www.postman.com/downloads/)

</details>

<details>
  <summary><strong>🐳 Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker
 

  > Rode os serviços `backend` e `db` com o comando `npm run compose:up`.
  - Lembre-se de parar o `postgres` se estiver usando localmente na porta padrão (`5432`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `backend` e outro chamado `db`.
  - A partir daqui você pode rodar acessar as rotas disponíveis em um aplicativo como o [Postman](https://www.postman.com/downloads/).

---
  
  ## Sem Docker
  
  > Instale as dependências com `npm install`

  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador, um Banco de Dados `Postgres` e configurar o arquivo `.env`.

</details>

<details>
<summary><strong> :bricks: Estrutura do projeto</strong></summary><br />

O projeto é composto de 3 entidades importantes para sua estrutura:

1️⃣ **Banco de dados:**
  - Contém um container docker PostgreSQL já configurado no docker-compose através de um serviço definido como `db`.
  - Tem o papel de fornecer dados para o serviço de _backend_.

2️⃣ **Back-end:**
 - Deve rodar na porta `3001` do localhost;
 - A aplicação é inicializada a partir do arquivo `./backend/src/server.ts`;

4️⃣ **Docker:**
  - O `docker-compose` tem a responsabilidade de unir todos os serviços conteinerizados (backend e db) e subir o projeto completo com o comando `npm run compose:up`;
  - O serviço backend tem sua `Dockerfile` corretamente configurada em suas raízes (`./back-end`), tornando possível a inicialização da aplicação;

</details>

<details id='sequelize'>
  <summary><strong>🎲 Sequelize</strong></summary>
  <br/>

  ⚠️ O `package.json` do diretório `./backend` contém um script `db:reset` que é responsável por "dropar" o banco, recriar e executar as _migrations_ . Você pode executá-lo com o commando `npm run db:reset` na raíz do diretório backend se por algum motivo precisar recriar a base de dados;


  ⚠️ Quaisquer execução referente ao sequelize-cli deve ser realizada dentro do diretório `./backend`.

  ⚠️ **O sequelize já foi inicializado, portanto NÃO é necessário executar o `sequelize init` novamente**

</details>

<details>
  <summary><strong> 👀 Comandos úteis </strong></summary><br />

  - Assim que você baixar o projeto rode o comando `npm install` na pasta raiz do projeto para **instalar as dependências gerais do projeto**;
  - Após a instalação, você pode executar `npm run compose:up` para subir os containers da aplicação, aguardar que todos estejam saudáveis e startados, podendo assim acessar o endereço `localhost:3001` em algum aplicativo como o [Postman](https://www.postman.com/downloads/) de sua preferência.
  - Você pode **subir ou descer uma aplicação do compose**, utilizando `npm run` com os scripts `compose:up`, `compose:down`;
  - Os comando de _compose_ anteriores estão configurados para executar o _docker-compose_ com o terminal desanexado (detached mode `-d`). Caso queira acompanhar os logs de um serviço em tempo real pelo terminal, basta executar `npm run logs [nome_do_servico]` onde _nome_do_servico_ é opcional e pode receber os serviços _backend_ ou _db_
</details>

<details>
  <summary><strong> 👨‍💻 Informações Importantes </strong></summary><br />

  - Para conseguir criar um form_answer você precisa:
    * Colocar um <b>name</b> com pelo menos 3 caracteres;
    * Um <b>email</b> válido no formato: usuario@servico.com;
    * Um <b>cpf</b> com pelo menos 11 caracteres;
    * Um <b>phone</b> com pelo menos 11 caracteres;

  - Para ver o relatório com os forms cadastrados:
    * Você precisa colocar um <b>dateInitial</b> no formato: YYYY-MM-DD e/ou um <b>dateFinal</b> no formato YYYY-MM-DD;
</details>

<details>
  <summary id="infos"><strong> :twisted_rightwards_arrows: Endpoints Acessíveis </strong></summary><br />

## POST Form `form/`
* Endpoint responsável por criar um form, caso todos os dados sejam preenchidos corretamente (como descreve a seção Informações importantes) e registrar no banco de dados.
  - O corpo da requisição deve seguir o formato abaixo:
    ```json
    {
        "name": "João Silva",
        "email": "silva@joao.com",
        "cpf": "333.444.555-66",
        "phone": "(44) 56666-7777"
    }
    ```

## POST FormDate `form/formdate`
* Endpoint responsável por listar os forms criados no período solicitado pela requisição
- O corpo da requisição deve seguir o formato abaixo:
    ```json
    {
        "dateInitial": "2022-03-01",
        "dateFinal": "2023-03-09"
    }
    ```


## GET FormAll `form/`
- O endpoint terá a resposta da requisição conforme formato abaixo:
    ```json
    [
      {
        "id": 1,
        "name": "João Silva",
        "email": "silva@joao.com",
        "cpf": "333.444.555-66",
        "phone": "(44) 56666-7777",
        "createdAt": "2023-03-09"
      },
        /*...*/
    ]
    ```

## GET FormOne `form/:id`
- O endpoint terá a resposta da requisição conforme formato abaixo:
    ```json
    {
        "id": 1,
        "name": "silva João",
        "email": "silva@joao.com",
        "cpf": "333.444.555-66",
        "phone": "(44) 56666-7777",
        "createdAt": "2023-03-09"
    }
    ```
</details>

<br />
Projeto Desenvolvido por [João Antônio](https://github.com/JoaopSilvaa)

