FROM node:latest as builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install pnpm globlal
RUN npm install -g pnpm

# Install app dependencies
RUN pnpm install

# Copy all files from the current directory to working direcotry
COPY . .

# Development stage
FROM builder as development
# Set NODE_ENV to dev
ENV NODE_ENV=development

# Expose the port the app runs on
EXPOSE 4543

# Command to run the app(in dev)
CMD [ "pnpm", "run", "dev" ]

# Production stage
FROM builder as production
# Set NODE_ENV to prod
ENV NODE_ENV=production

# Run the prod command
CMD [ "pnpm", "start" ]