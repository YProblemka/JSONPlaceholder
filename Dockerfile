FROM node:17-alpine
WORKDIR /var/app
COPY . ./

RUN npm ci
CMD npm run start