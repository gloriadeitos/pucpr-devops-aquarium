FROM node:18-alpine

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./
COPY tailwind.config.js ./

# Instalar dependências
RUN npm install

# Copiar o resto do código
COPY . .

# Comando para build do Tailwind
CMD ["npm", "run", "build"]