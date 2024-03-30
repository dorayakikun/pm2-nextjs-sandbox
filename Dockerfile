FROM node:20-slim

WORKDIR /app

COPY . .

RUN npm run build

RUN npm install -g pm2

CMD ["pm2-runtime", "start", "ecosystem.config.js"]

# pm2-runtime start -i 2 ./node_modules/.bin/next -- start -p 3000
# CMD ["pm2-runtime", "start", "-i", "2", "./node_modules/.bin/next", "--", "start", "-p", "3000"]