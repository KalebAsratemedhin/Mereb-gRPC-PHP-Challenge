# Use Node.js for React Vite
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the Vite development port
EXPOSE 5173

# Start the React app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]