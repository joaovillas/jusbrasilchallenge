FROM node

WORKDIR /usr/app/client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80
CMD [ "npm", "i"]