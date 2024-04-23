FROM node:20-alpine3.18

WORKDIR /app

COPY ./server .

RUN npm ci
CMD ["node", "app.js"]

EXPOSE 3000