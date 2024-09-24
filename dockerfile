FROM node:latest

WORKDIR /app
COPY . .
COPY .env .env
RUN apt-get update -y && apt-get install -y
RUN npm install
RUN npx prisma generate
RUN npx prisma migrate deploy
RUN npm run build

CMD ["npm", "run", "start"]





