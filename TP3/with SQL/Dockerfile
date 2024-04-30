FROM node:20-alpine3.18

WORKDIR /app

COPY ./srv .

RUN npm ci
CMD ["node", "src/index.js"]

EXPOSE 3000