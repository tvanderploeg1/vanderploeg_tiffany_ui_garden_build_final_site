# Use Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /vanderploeg_tiffany_final_site

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Run pre-commit checks (prettier, eslint, tests)
RUN npm run prettier:check
RUN npm run lint
RUN npm test

# Build the app
RUN npm run build

# Install serve to run the app
RUN npm install -g serve

# Expose port 5575
EXPOSE 5575

# Start the app on port 5575
CMD ["serve", "-s", "build", "-l", "5575"]