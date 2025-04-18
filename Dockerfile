FROM node:18-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN npx prisma generate
# Ensure build doesn't depend on DB
# ENV NODE_ENV=production
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
