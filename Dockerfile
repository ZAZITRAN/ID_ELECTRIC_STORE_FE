FROM node:18.12-slim as BUILD
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
EXPOSE 4200
CMD npm start