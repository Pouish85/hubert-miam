FROM node:20.9.0-alpine3.17

WORKDIR /app

COPY ./*.json ./
COPY ./src ./src
COPY tsconfig.json ./
COPY .env ./

RUN npm i

CMD npm run start
