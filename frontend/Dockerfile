FROM node:20.9.0-alpine3.17

WORKDIR /app
COPY package*.json ./
RUN yarn
COPY src ./src
COPY public ./public
COPY *.config.ts ./
COPY *.config.js ./
COPY postcss.config.js ./postcss.config.js

CMD yarn run serve
