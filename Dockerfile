FROM node As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

COPY . .
