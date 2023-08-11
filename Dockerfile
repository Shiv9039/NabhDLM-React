FROM node:16.0.0-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]