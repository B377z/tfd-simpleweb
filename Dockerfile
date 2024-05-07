FROM node:alpine3.18

# Set working directory inside the container
WORKDIR /usr/app

# Copy package.json and package-lock.json
COPY package*.json ./

RUN npm install

COPY . .

# Command to run the application
CMD [ "npm", "start"]