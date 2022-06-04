FROM node:16-alpine

WORKDIR /mui-project

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "start"]