FROM node:14-slim

ENV APP_PORT=3000

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD npm run start
