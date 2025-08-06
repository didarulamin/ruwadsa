# Dockerfile to containerize the Ruwad Group website Node.js server.

# Stage 1: Use an official Node.js runtime as a parent image
# We use the 'alpine' version because it's very lightweight.
FROM node:18-alpine

# Stage 2: Set the working directory inside the container
# This is where our app files will live.
WORKDIR /app

# Stage 3: Copy the application files into the container
# This copies index.html and server.js into the /app/ directory.
COPY index.html .
COPY server.js .

# Stage 4: Expose the port the app runs on
# This tells Docker that the container listens on port 3007.
EXPOSE 3007

# Stage 5: Define the command to run the app
# This is the command that will be executed when the container starts.
CMD [ "node", "server.js" ]