FROM node:20-alpine AS build

WORKDIR /app

ARG VITE_BASE=/
ENV VITE_BASE=${VITE_BASE}

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html