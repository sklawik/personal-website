FROM node:latest

WORKDIR /app
COPY . .
COPY .env .env
ENV DATABASE_URL=mysql://root:123@db:3306/blog
RUN apt-get update -y && apt-get install -y
RUN npm install

# ENTRYPOINT ["npx", "prisma", "migrate", "deploy"]

RUN npx prisma generate
# RUN npm run build


ENTRYPOINT ["npm", "run", "dockerBuild"]


