FROM node:14.15
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
COPY tsconfig.build.json ./
RUN npm install
CMD npm run docker-start