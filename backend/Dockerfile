# ---------- Build stage ----------
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# ---------- Production stage ----------
FROM node:20-alpine as production

# Set the node env and the port that the container will listen on
# (Cloud Run requires the port to be set by the service)
ENV NODE_ENV production
ENV PORT 8080

WORKDIR /app


COPY package*.json ./

# Install only production dependencies
RUN yarn install --frozen-lockfile --production

# Copy built application from the builder stage
COPY --from=builder /app/dist ./dist

CMD ["node", "dist/main.js"]
