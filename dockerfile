FROM node:latest

WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y default-mysql-client

RUN npm install
CMD ["sh", "-c", "until mysql -h db -u root -p123 -e 'select 1'; do sleep 5; done; npm run build"]





