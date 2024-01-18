FROM node:20-alpine3.18 

RUN mkdir -p /home/app

WORKDIR /home/app

RUN apk add git 

RUN apk add vim  

COPY package*.json /home/app/

RUN npm install -g @angular/cli@17

RUN npm install

COPY . /home/app

EXPOSE 4200

CMD ["npm", "start"]



