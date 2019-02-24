FROM node

WORKDIR /usr/app/client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "i"]