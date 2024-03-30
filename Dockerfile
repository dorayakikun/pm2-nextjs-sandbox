FROM node:20-slim
WORKDIR /app
RUN npm install -g pm2
COPY package.json package-lock.json .
RUN npm ci
COPY . .
RUN npm run build
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
