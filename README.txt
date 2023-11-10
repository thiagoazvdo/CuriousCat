# Dockerizando uma Aplicação Node.js com EJS, Express, Sequelize, BodyParser e MySql2

Este é um guia passo a passo para ajudá-lo a colocar sua aplicação Node.js baseada em EJS, Express, Sequelize, BodyParser e MySql2 no Docker. Docker é uma plataforma que permite empacotar, distribuir e executar aplicativos em contêineres.

## Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/) e npm
- Editor de código de sua escolha (recomendado: [Visual Studio Code](https://code.visualstudio.com/))

## Passo 1: Estrutura do Projeto
Organize seu projeto da seguinte forma:


/
|-- src/
|   |-- public/
|   |-- views/
|   |-- app.js
|   |-- ...
|-- Dockerfile
|-- package.json
|-- ...


Certifique-se de incluir os arquivos necessários no diretório `src` para sua aplicação Node.js.

## Passo 2: Configurando o Dockerfile

Crie um arquivo chamado `Dockerfile` na raiz do seu projeto com o seguinte conteúdo:

Dockerfile
# Estágio 1: Construção
FROM node:16.19.1-alpine3.17 AS builder

# Criando o diretório de trabalho
WORKDIR /usr/src

# Copiando apenas o package.json e package-lock.json primeiro
COPY package*.json ./

# Instalando dependências
RUN npm install

# Estágio 2: Execução
FROM node:16.19.1-alpine3.17

# Criando o diretório de trabalho novamente
WORKDIR /usr/src

# Copiando apenas os arquivos necessários do estágio anterior
COPY --from=builder /usr/src/node_modules /usr/src/node_modules

# Copiando todos os outros arquivos
COPY . .

# Rodando a aplicação
CMD ["node", "index.js"]

Este Dockerfile usa a imagem oficial do Node.js, instala as dependências e define o comando de inicialização da aplicação.

## Passo 4: Executando o Contêiner Docker

Execute o seguinte comando para iniciar o contêiner:

bash
docker-compose up --build
```
´´´
Lembrando que para parar a aplicação, rode:
docker-compose down
´´

Agora sua aplicação Node.js está em execução dentro de um contêiner Docker.

Lembre-se de ajustar as configurações do Sequelize para se conectar ao banco de dados MySQL no ambiente Docker, e certifique-se de que as portas e configurações do banco de dados estejam corretas.

Este projeto foi desenvolvido pelos integrantes:


Allan Dellon
Angelo Paulino
Bruno Andrade
Thiago Azevedo