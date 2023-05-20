FROM node:16.14.0
WORKDIR /sandbox-nestjs
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD [ "yarn", "run", "start:prod" ]
