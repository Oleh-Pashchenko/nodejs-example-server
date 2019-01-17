FROM node:carbon

COPY . /var/www

WORKDIR /var/www

ENV HOST="0.0.0.0"

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]