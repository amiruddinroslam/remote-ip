FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

# RUN npm ci
# If for production
RUN npm ci --only=production

# Bundle app source
COPY . /app

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]