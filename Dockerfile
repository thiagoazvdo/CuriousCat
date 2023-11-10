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
CMD ["node", "index.js"]
