FROM node:16-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Set environment variables
ENV NODE_ENV=production

# Build the app
RUN npm run build

# Install serve to serve the static files
RUN npm install -g serve

# Expose the port
EXPOSE 3000

# Serve the static files
CMD ["serve", "-s", "build", "-l", "3000"]
