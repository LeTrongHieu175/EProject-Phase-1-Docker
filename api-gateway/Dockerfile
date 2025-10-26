FROM node:18-alpine

WORKDIR /app

# install deps
COPY package*.json ./
RUN npm install --production

# copy source
COPY . .

EXPOSE 3003

CMD ["npm", "start"]
