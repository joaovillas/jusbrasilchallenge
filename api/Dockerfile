FROM node

WORKDIR /usr/app/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
CMD [ "npm", "i"]