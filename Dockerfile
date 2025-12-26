# Etapa 1: Build
FROM node:18-alpine AS build

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm ci --legacy-peer-deps

# Copiar el resto de archivos
COPY . .

# Build de la aplicación
RUN npm start

# Exponer puerto 80
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]