FROM node:14-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production --ignore-scripts
COPY . .
EXPOSE 3000

RUN npm i --save-dev @nestjs/cli@8.0.0

RUN npm run build

RUN cd /usr/src/app/dist && ls
CMD ["npm", "run", "start:dev"]