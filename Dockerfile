# Use the Node.js image for the development local
FROM node:20 AS local

# Set the working directory. If it doesn't exists, it'll be created
WORKDIR /app

# Copy the file `package.json` from current folder
# inside our image in the folder `/app`
COPY ./package.json /app/package.json

# Install the dependencies
RUN npm install

# Copy all files from current folder
# inside our image in the folder `/app`
COPY . /app

# Command
ENTRYPOINT npm run watch