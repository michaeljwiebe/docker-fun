# syntax=docker:dockerfile:1
FROM node:14.18.0-alpine
WORKDIR /code
ENV PORT 8080
COPY package.json /code/package.json
RUN npm install
COPY . /code
CMD ["npm", "run", "start"]