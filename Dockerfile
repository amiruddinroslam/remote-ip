FROM node:14 as build

WORKDIR /app
COPY package.json index.js ./
RUN npm install

FROM node:14-alpine

COPY --from=build /app /
EXPOSE 8080
CMD ["index.js"]