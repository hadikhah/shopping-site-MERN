From node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN ls
# EXPOSE 14000

CMD ["npm", "run", "dev"]
