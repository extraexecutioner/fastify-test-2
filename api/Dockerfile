FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM node:24-alpine

WORKDIR /app

COPY --from=builder /app/dist/bundle.cjs ./

RUN apk add --no-cache curl

USER node

EXPOSE 5000

CMD ["node", "bundle.cjs"]