# Use a lightweight Node.js base image
FROM node:18-alpine

# Set working directory for npm commands
WORKDIR /app

# Install dependencies (if package.json exists)
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy the app source
COPY . .

# Expose the port the app will run on
EXPOSE 8080

# Start a static file server using http-server
CMD ["npm", "start"]
