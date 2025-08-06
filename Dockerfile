# Dockerfile to containerize the Ruwad Group website Express.js server.

# Stage 1: Use an official Node.js runtime as a parent image
# We use the 'alpine' version because it's very lightweight.
FROM node:18-alpine

# Stage 2: Set the working directory inside the container
# This is where our app files will live.
WORKDIR /app

# Stage 3: Copy package files and install dependencies
# Copying these first leverages Docker's layer caching.
# If these files don't change, Docker won't re-run npm install on subsequent builds.
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Stage 4: Copy the rest of the application files into the container
# This copies index.html and server.js into the /app/ directory.
COPY index.html .
COPY server.js .

# Stage 5: Expose the port the app runs on
# This tells Docker that the container listens on port 7002.
EXPOSE 7002

# Stage 6: Define the command to run the app
# Using npm start is a best practice for running Node.js apps.
CMD [ "npm", "start" ]